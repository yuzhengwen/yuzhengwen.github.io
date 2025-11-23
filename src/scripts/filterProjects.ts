document.addEventListener("astro:page-load", function () {
  initializeFilter();
});
//console.log("Filter Projects Script Loaded");

export function initializeFilter() {
  const searchKey = "filter";
  const projectFilter = document.getElementById(
    "project-filter"
  ) as HTMLSelectElement;
  const projectCards = document.querySelectorAll(
    ".project-card"
  ) as NodeListOf<HTMLElement>;

  const filterProjects = (filterValue: string) => {
    projectCards.forEach((projectDiv) => {
      const projectType =
        projectDiv.getElementsByClassName("project-type")[0].textContent;
      if (filterValue === "All" || projectType === filterValue) {
        projectDiv.style.display = "block";
      } else {
        projectDiv.style.display = "none";
      }
    });
  };

  const updateURLParam = (key: string, value: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);
    window.history.replaceState({}, "", url.toString());
  };

  // if URL already has a search param, update initial state
  const urlParams = new URLSearchParams(window.location.search);
  const initialFilter = urlParams.get(searchKey) || "All";
  projectFilter.value = initialFilter;
  filterProjects(initialFilter);

  projectFilter.addEventListener("change", () => {
    const filterValue = projectFilter.value;
    filterProjects(filterValue);
    updateURLParam(searchKey, filterValue);
  });
}
