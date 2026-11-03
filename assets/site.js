// Points the download buttons straight at the newest release's files. Until there is a
// release, or when GitHub cannot be reached, they keep linking to the releases page.
const RELEASE_API = "https://api.github.com/repos/LunixSudo/selene-launcher/releases/latest";

const FILES = {
  windows: (name) => /^SeleneLauncher-Windows-Setup-.*\.exe$/i.test(name),
  portable: (name) => /windows.*portable.*\.zip$/i.test(name),
  appimage: (name) => /\.appimage$/i.test(name),
  deb: (name) => /\.deb$/i.test(name),
};

async function showRelease() {
  const buttons = document.querySelectorAll("[data-file]");
  if (buttons.length === 0) {
    return;
  }
  let release;
  try {
    const response = await fetch(RELEASE_API, { headers: { Accept: "application/vnd.github+json" } });
    if (!response.ok) {
      return;
    }
    release = await response.json();
  } catch {
    return;
  }
  for (const button of buttons) {
    const asset = release.assets?.find((file) => FILES[button.dataset.file]?.(file.name));
    if (asset) {
      button.href = asset.browser_download_url;
    }
  }
  const version = release.tag_name?.replace(/^v/, "");
  for (const label of document.querySelectorAll("[data-version]")) {
    label.textContent = label.dataset.version.replace("{version}", version);
    label.hidden = false;
  }
  for (const note of document.querySelectorAll("[data-prerelease]")) {
    note.hidden = true;
  }
}

void showRelease();
