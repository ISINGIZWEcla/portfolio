document.addEventListener("DOMContentLoaded", function() {
    console.log("IT’S ALIVE!");

    function $$ (selector, context = document) {
        return Array.from(context.querySelectorAll(selector));
    }

    let pages = [
        {url: "index.html", title: "Home"},
        {url: "projects/index.html", title: "Projects"},
        {url: "resume.html", title: "Resume"},
        {url: "contacts/index.html", title: "Contacts"},
        // add the rest of your pages here
    ];



    let nav = document.getElementById("main-nav"); // Target the existing nav element

    if (nav) { // Ensure the nav element exists
        for (let p of pages) {
            let url = p.url;
            let title = p.title;

			const ARE_WE_HOME = document.documentElement.classList.contains("Home");

			if (!ARE_WE_HOME && !url.startsWith("http")) {
				url = "../" + url;
			}

            // Create link and add it to nav
            let a = document.createElement("a");
			a.href = url;
			a.textContent = title;
			nav.append(a);

			a.classList.toggle("current", a.host === location.host && a.pathname === location.pathname);

        }
    } else {
        console.error("Navigation element not found!");
    }
});
