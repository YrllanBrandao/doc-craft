export function modal() {
  const modal = document.getElementById("modal-code");
  const contains = modal.classList.contains("d-none") ? true : false;

  if (contains) {
    modal.classList.remove("d-none");
  } else {
    modal.classList.add("d-none");
  }
}
