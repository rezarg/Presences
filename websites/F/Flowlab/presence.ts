const presence = new Presence({ clientId: "991160367629750372" }),
	browsingTimestamp = Math.floor(Date.now() / 1000);

presence.on("UpdateData", async () => {
	const presenceData: PresenceData = {
			largeImageKey:
				"iconbig",
			startTimestamp: browsingTimestamp,
		},
		{ pathname, hostname } = document.location;

	if (hostname === "flowlab.io") {
		switch (pathname) {
			case "/": {
				presenceData.details = "Home Page";
				break;
			}
			case "/games": {
				if (document.location.search.includes("?q=")) {
					presenceData.details = "Searching Games: " + "\"" + document.location.search.split("?q=")[1].replaceAll("+", " ") + "\"";
				} else {
					presenceData.details = "Browsing Games";
				}
				break;
			}
			case "/game/browse": {
				presenceData.details = "Viewing games page";
				break;
			}
			case "/resources": {
				presenceData.details = "Browsing Resources";
				break;
			}
			case "/video_tutorials": {
				presenceData.details = "Browsing Video Tutorials";
				break;
			}
			case "/exploring_flowlab": {
				presenceData.details = "Browsing Examples";
				break;
			}
			case "/user_guide/": {
				presenceData.details = "Browsing the User Guide";
				break;
			}
			case "/examples": {
				presenceData.details = "Browsing Examples";
				break;
			}
			case "/behavior_handbook/": {
				presenceData.details = "Browsing the Behavior Handbook";
				break;
			}
			case "/exporting": {
				presenceData.details = "Browsing Exporting Help";
				break;
			}
			case "/multiplayer_handbook/": {
				presenceData.details = "Browsing the Multiplayer Handbook";
				break;
			}
			case "/pricing": {
				presenceData.details = "Browsing Upgrade Options";
				break;
			}
			case "/education/teachers": {
				presenceData.details = "Browsing Education Options";
				break;
			}
			case "/lab/blog/": {
				presenceData.details = "Browsing Blog Posts";
				break;
			}
			case "/games/mine": {
				presenceData.details = "Browsing Their Games";
				break;
			}
		}

		if (pathname.includes("_export")) {
			presenceData.details = "Browsing Exporting Help for " + pathname.split("_export")[0].replaceAll("/", "");
		} else if (pathname.includes("/assets/docs/")) {
			presenceData.details = "Browsing Documentation: \"" + pathname.split("/assets/docs/")[1] + "\"";
		} else if (pathname.includes("/lab/blog/") && pathname.split("/lab/blog/")[1]) {
			presenceData.details = "Browsing Blog Post: \"" + document.querySelectorAll(".display-2").item(0).textContent.trim() + "\"";
		} else if (pathname.includes("/games/play/") || pathname.includes("/game/play/")) {
			presenceData.details = "Playing \"" + document.querySelectorAll("#game_title").item(0).textContent.trim() + "\"";
			presenceData.state = "By: " + document.querySelectorAll("#game_author a").item(0).textContent.trim();
			presenceData.buttons = [
				{
					label: "Play Game",
					url: "https://flowlab.io/games/play/" + pathname.split("/")[pathname.split("/").length-1]
				},
				{
					label: "Creator Profile",
					url: "https://flowlab.io" + document.querySelectorAll("#game_author a").item(0).getAttribute("href")
				}
			]
		} else if (pathname.includes("/games/edit/") || pathname.includes("/game/edit/") || pathname.includes("/game/view/")) {
			presenceData.details = "Editing \"" + document.querySelectorAll("#game_title").item(0).textContent.trim() + "\"";
			presenceData.state = "By: " + document.querySelectorAll("#game_author a").item(0).textContent.trim();
		} else if (pathname.includes("/dev_teams/view/")) {
			presenceData.details = "Viewing Team: \"" + document.getElementsByClassName("mb-0 fs-3 fw-normal text-white text-truncate").item(0).textContent.trim() + "\"";
		} else if (pathname.includes("/users/profile/") && pathname.split("/users/profile/")[1]) {
			presenceData.details = "Viewing " + document.getElementsByClassName("mb-0 fs-3 fw-normal text-white text-truncate").item(0).textContent.trim() + "'s Profile";
		}
	} else if (hostname === "community.flowlab.io") {
		presenceData.details = "Browsing the Community Forums";
		switch (pathname) {
			case "/": {
				presenceData.state = "Home Page";
				break;
			}
			case "/categories": {
				presenceData.state = "Browsing Categories";
				break;
			}
			case "/latest": {
				presenceData.state = "Browsing Latest Posts";
				break;
			}
			case "/top": {
				presenceData.state = "Browsing Top Posts";
				break;
			}
			case "/about": {
				presenceData.state = "Reading the About";
				break;
			}
			case "/faq": {
				presenceData.state = "Reading the FAQ";
				break;
			}
			case "/tos": {
				presenceData.state = "Reading the Terms of Service";
				break;
			}
			case "/privacy": {
				presenceData.state = "Reading the Privacy Policy";
				break;
			}
			case "/search": {
				presenceData.state = "Searching for \"" + document.location.search.split("?q=")[1].replaceAll("+", " ") + "\"";
				break;
			}
		}

		if (pathname.includes("/u/")) {
			presenceData.state = "Viewing " + document.getElementsByClassName("username").item(0).textContent.trim() + "'s Profile";
			presenceData.buttons = [
				{
					label: "View Profile",
					url: "https://community.flowlab.io/u/" + pathname.split("/u/")[1]
				}
			]
		} else if (pathname.includes("/t/")) {
			presenceData.details = "Reading \"" + document.getElementsByClassName("fancy-title").item(0)?.textContent?.trim() + "\"";
			presenceData.state = "By " + document.getElementsByClassName("first username").item(0).textContent.trim();
			presenceData.buttons = [
				{
					label: "View Post",
					url: document.URL
				}
			]
		}
	}

	if (presenceData.details) presence.setActivity(presenceData);
	else presence.setActivity();
});
