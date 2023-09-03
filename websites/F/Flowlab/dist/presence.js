var __webpack_exports__ = {};
const presence = new Presence({ clientId: "991160367629750372" }), browsingTimestamp = Math.floor(Date.now() / 1000);
presence.on("UpdateData", async () => {
    const presenceData = {
        largeImageKey: "iconbig",
        startTimestamp: browsingTimestamp,
    }, { pathname, hostname } = document.location;
    if (hostname === "flowlab.io") {
        switch (pathname) {
            case "/": {
                presenceData.details = "Home Page";
                break;
            }
            case "/games": {
                if (document.location.search.includes("?q=")) {
                    presenceData.details = "Searching Games: " + "\"" + document.location.search.split("?q=")[1].replaceAll("+", " ") + "\"";
                }
                else {
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
        }
        else if (pathname.includes("/assets/docs/")) {
            presenceData.details = "Browsing Documentation: \"" + pathname.split("/assets/docs/")[1] + "\"";
        }
        else if (pathname.includes("/lab/blog/") && pathname.split("/lab/blog/")[1]) {
            presenceData.details = "Browsing Blog Post: \"" + document.querySelectorAll(".display-2").item(0).textContent.trim() + "\"";
        }
        else if (pathname.includes("/games/play/") || pathname.includes("/game/play/")) {
            presenceData.details = "Playing \"" + document.querySelectorAll("#game_title").item(0).textContent.trim() + "\"";
            presenceData.state = "By: " + document.querySelectorAll("#game_author a").item(0).textContent.trim();
            presenceData.buttons = [
                {
                    label: "Play Game",
                    url: "https://flowlab.io/games/play/" + pathname.split("/")[pathname.split("/").length - 1]
                },
                {
                    label: "Creator Profile",
                    url: "https://flowlab.io" + document.querySelectorAll("#game_author a").item(0).getAttribute("href")
                }
            ];
        }
        else if (pathname.includes("/games/edit/") || pathname.includes("/game/edit/") || pathname.includes("/game/view/")) {
            presenceData.details = "Editing \"" + document.querySelectorAll("#game_title").item(0).textContent.trim() + "\"";
            presenceData.state = "By: " + document.querySelectorAll("#game_author a").item(0).textContent.trim();
        }
        else if (pathname.includes("/dev_teams/view/")) {
            presenceData.details = "Viewing Team: \"" + document.getElementsByClassName("mb-0 fs-3 fw-normal text-white text-truncate").item(0).textContent.trim() + "\"";
        }
        else if (pathname.includes("/users/profile/") && pathname.split("/users/profile/")[1]) {
            presenceData.details = "Viewing " + document.getElementsByClassName("mb-0 fs-3 fw-normal text-white text-truncate").item(0).textContent.trim() + "'s Profile";
        }
    }
    else if (hostname === "community.flowlab.io") {
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
            ];
        }
        else if (pathname.includes("/t/")) {
            presenceData.details = "Reading \"" + document.getElementsByClassName("fancy-title").item(0)?.textContent?.trim() + "\"";
            presenceData.state = "By " + document.getElementsByClassName("first username").item(0).textContent.trim();
            presenceData.buttons = [
                {
                    label: "View Post",
                    url: document.URL
                }
            ];
        }
    }
    if (presenceData.details)
        presence.setActivity(presenceData);
    else
        presence.setActivity();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wcmVzZW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRSxDQUFDLEVBQ2hFLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBRW5ELFFBQVEsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLEtBQUssSUFBSSxFQUFFO0lBQ3BDLE1BQU0sWUFBWSxHQUFpQjtRQUNqQyxhQUFhLEVBQ1osU0FBUztRQUNWLGNBQWMsRUFBRSxpQkFBaUI7S0FDakMsRUFDRCxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO0lBRTVDLElBQUksUUFBUSxLQUFLLFlBQVksRUFBRTtRQUM5QixRQUFRLFFBQVEsRUFBRTtZQUNqQixLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNULFlBQVksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO2dCQUNuQyxNQUFNO2FBQ047WUFDRCxLQUFLLFFBQVEsQ0FBQyxDQUFDO2dCQUNkLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUM3QyxZQUFZLENBQUMsT0FBTyxHQUFHLG1CQUFtQixHQUFHLElBQUksR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7aUJBQ3pIO3FCQUFNO29CQUNOLFlBQVksQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUM7aUJBQ3hDO2dCQUNELE1BQU07YUFDTjtZQUNELEtBQUssY0FBYyxD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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjtBQUFBLGdDQUFnQyxnQ0FBZ0M7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLElBQUkscUJBQXFCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsMkNBQTJDLCtqUCIsInNvdXJjZXMiOlsid2VicGFjazovL3ByZXNlbmNlcy8uL3dlYnNpdGVzL0YvRmxvd2xhYi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7IGNsaWVudElkOiBcIjk5MTE2MDM2NzYyOTc1MDM3MlwiIH0pLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaWNvbmJpZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG4gICAgfSwgeyBwYXRobmFtZSwgaG9zdG5hbWUgfSA9IGRvY3VtZW50LmxvY2F0aW9uO1xuICAgIGlmIChob3N0bmFtZSA9PT0gXCJmbG93bGFiLmlvXCIpIHtcbiAgICAgICAgc3dpdGNoIChwYXRobmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcIi9cIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJIb21lIFBhZ2VcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCIvZ2FtZXNcIjoge1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoXCI/cT1cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlNlYXJjaGluZyBHYW1lczogXCIgKyBcIlxcXCJcIiArIGRvY3VtZW50LmxvY2F0aW9uLnNlYXJjaC5zcGxpdChcIj9xPVwiKVsxXS5yZXBsYWNlQWxsKFwiK1wiLCBcIiBcIikgKyBcIlxcXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBHYW1lc1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCIvZ2FtZS9icm93c2VcIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGdhbWVzIHBhZ2VcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCIvcmVzb3VyY2VzXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgUmVzb3VyY2VzXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiL3ZpZGVvX3R1dG9yaWFsc1wiOiB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIFZpZGVvIFR1dG9yaWFsc1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIi9leHBsb3JpbmdfZmxvd2xhYlwiOiB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIEV4YW1wbGVzXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiL3VzZXJfZ3VpZGUvXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgdGhlIFVzZXIgR3VpZGVcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCIvZXhhbXBsZXNcIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBFeGFtcGxlc1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIi9iZWhhdmlvcl9oYW5kYm9vay9cIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyB0aGUgQmVoYXZpb3IgSGFuZGJvb2tcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCIvZXhwb3J0aW5nXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgRXhwb3J0aW5nIEhlbHBcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCIvbXVsdGlwbGF5ZXJfaGFuZGJvb2svXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgdGhlIE11bHRpcGxheWVyIEhhbmRib29rXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiL3ByaWNpbmdcIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBVcGdyYWRlIE9wdGlvbnNcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCIvZWR1Y2F0aW9uL3RlYWNoZXJzXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgRWR1Y2F0aW9uIE9wdGlvbnNcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCIvbGFiL2Jsb2cvXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgQmxvZyBQb3N0c1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIi9nYW1lcy9taW5lXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgVGhlaXIgR2FtZXNcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCJfZXhwb3J0XCIpKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgRXhwb3J0aW5nIEhlbHAgZm9yIFwiICsgcGF0aG5hbWUuc3BsaXQoXCJfZXhwb3J0XCIpWzBdLnJlcGxhY2VBbGwoXCIvXCIsIFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL2Fzc2V0cy9kb2NzL1wiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIERvY3VtZW50YXRpb246IFxcXCJcIiArIHBhdGhuYW1lLnNwbGl0KFwiL2Fzc2V0cy9kb2NzL1wiKVsxXSArIFwiXFxcIlwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL2xhYi9ibG9nL1wiKSAmJiBwYXRobmFtZS5zcGxpdChcIi9sYWIvYmxvZy9cIilbMV0pIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBCbG9nIFBvc3Q6IFxcXCJcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGlzcGxheS0yXCIpLml0ZW0oMCkudGV4dENvbnRlbnQudHJpbSgpICsgXCJcXFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCIvZ2FtZXMvcGxheS9cIikgfHwgcGF0aG5hbWUuaW5jbHVkZXMoXCIvZ2FtZS9wbGF5L1wiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlBsYXlpbmcgXFxcIlwiICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNnYW1lX3RpdGxlXCIpLml0ZW0oMCkudGV4dENvbnRlbnQudHJpbSgpICsgXCJcXFwiXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkJ5OiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZ2FtZV9hdXRob3IgYVwiKS5pdGVtKDApLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiUGxheSBHYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL2Zsb3dsYWIuaW8vZ2FtZXMvcGxheS9cIiArIHBhdGhuYW1lLnNwbGl0KFwiL1wiKVtwYXRobmFtZS5zcGxpdChcIi9cIikubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQ3JlYXRvciBQcm9maWxlXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL2Zsb3dsYWIuaW9cIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZ2FtZV9hdXRob3IgYVwiKS5pdGVtKDApLmdldEF0dHJpYnV0ZShcImhyZWZcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL2dhbWVzL2VkaXQvXCIpIHx8IHBhdGhuYW1lLmluY2x1ZGVzKFwiL2dhbWUvZWRpdC9cIikgfHwgcGF0aG5hbWUuaW5jbHVkZXMoXCIvZ2FtZS92aWV3L1wiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkVkaXRpbmcgXFxcIlwiICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNnYW1lX3RpdGxlXCIpLml0ZW0oMCkudGV4dENvbnRlbnQudHJpbSgpICsgXCJcXFwiXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkJ5OiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZ2FtZV9hdXRob3IgYVwiKS5pdGVtKDApLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXRobmFtZS5pbmNsdWRlcyhcIi9kZXZfdGVhbXMvdmlldy9cIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIFRlYW06IFxcXCJcIiArIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYi0wIGZzLTMgZnctbm9ybWFsIHRleHQtd2hpdGUgdGV4dC10cnVuY2F0ZVwiKS5pdGVtKDApLnRleHRDb250ZW50LnRyaW0oKSArIFwiXFxcIlwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL3VzZXJzL3Byb2ZpbGUvXCIpICYmIHBhdGhuYW1lLnNwbGl0KFwiL3VzZXJzL3Byb2ZpbGUvXCIpWzFdKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBcIiArIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYi0wIGZzLTMgZnctbm9ybWFsIHRleHQtd2hpdGUgdGV4dC10cnVuY2F0ZVwiKS5pdGVtKDApLnRleHRDb250ZW50LnRyaW0oKSArIFwiJ3MgUHJvZmlsZVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGhvc3RuYW1lID09PSBcImNvbW11bml0eS5mbG93bGFiLmlvXCIpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIHRoZSBDb21tdW5pdHkgRm9ydW1zXCI7XG4gICAgICAgIHN3aXRjaCAocGF0aG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCIvXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkhvbWUgUGFnZVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIi9jYXRlZ29yaWVzXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkJyb3dzaW5nIENhdGVnb3JpZXNcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCIvbGF0ZXN0XCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkJyb3dzaW5nIExhdGVzdCBQb3N0c1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIi90b3BcIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiQnJvd3NpbmcgVG9wIFBvc3RzXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiL2Fib3V0XCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIlJlYWRpbmcgdGhlIEFib3V0XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiL2ZhcVwiOiB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJSZWFkaW5nIHRoZSBGQVFcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCIvdG9zXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIlJlYWRpbmcgdGhlIFRlcm1zIG9mIFNlcnZpY2VcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCIvcHJpdmFjeVwiOiB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJSZWFkaW5nIHRoZSBQcml2YWN5IFBvbGljeVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIi9zZWFyY2hcIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiU2VhcmNoaW5nIGZvciBcXFwiXCIgKyBkb2N1bWVudC5sb2NhdGlvbi5zZWFyY2guc3BsaXQoXCI/cT1cIilbMV0ucmVwbGFjZUFsbChcIitcIiwgXCIgXCIpICsgXCJcXFwiXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL3UvXCIpKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIlZpZXdpbmcgXCIgKyBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidXNlcm5hbWVcIikuaXRlbSgwKS50ZXh0Q29udGVudC50cmltKCkgKyBcIidzIFByb2ZpbGVcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVmlldyBQcm9maWxlXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL2NvbW11bml0eS5mbG93bGFiLmlvL3UvXCIgKyBwYXRobmFtZS5zcGxpdChcIi91L1wiKVsxXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCIvdC9cIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWFkaW5nIFxcXCJcIiArIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmYW5jeS10aXRsZVwiKS5pdGVtKDApPy50ZXh0Q29udGVudD8udHJpbSgpICsgXCJcXFwiXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkJ5IFwiICsgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZpcnN0IHVzZXJuYW1lXCIpLml0ZW0oMCkudGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJWaWV3IFBvc3RcIixcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBkb2N1bWVudC5VUkxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwcmVzZW5jZURhdGEuZGV0YWlscylcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5d2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXl4RlFVRkZMRkZCUVZFc1JVRkJSU3h2UWtGQmIwSXNSVUZCUlN4RFFVRkRMRVZCUTJoRkxHbENRVUZwUWl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRE8wRkJSVzVFTEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hGUVVGRkxFdEJRVXNzU1VGQlNTeEZRVUZGTzBsQlEzQkRMRTFCUVUwc1dVRkJXU3hIUVVGcFFqdFJRVU5xUXl4aFFVRmhMRVZCUTFvc1UwRkJVenRSUVVOV0xHTkJRV01zUlVGQlJTeHBRa0ZCYVVJN1MwRkRha01zUlVGRFJDeEZRVUZGTEZGQlFWRXNSVUZCUlN4UlFVRlJMRVZCUVVVc1IwRkJSeXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETzBsQlJUVkRMRWxCUVVrc1VVRkJVU3hMUVVGTExGbEJRVmtzUlVGQlJUdFJRVU01UWl4UlFVRlJMRkZCUVZFc1JVRkJSVHRaUVVOcVFpeExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVOVUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NWMEZCVnl4RFFVRkRPMmRDUVVOdVF5eE5RVUZOTzJGQlEwNDdXVUZEUkN4TFFVRkxMRkZCUVZFc1EwRkJReXhEUVVGRE8yZENRVU5rTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMjlDUVVNM1F5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRzFDUVVGdFFpeEhRVUZITEVsQlFVa3NSMEZCUnl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU03YVVKQlEzcElPM0ZDUVVGTk8yOUNRVU5PTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1owSkJRV2RDTEVOQlFVTTdhVUpCUTNoRE8yZENRVU5FTEUxQlFVMDdZVUZEVGp0WlFVTkVMRXRCUVVzc1kwRkJZeXhEUVVGRExFTkJRVU03WjBKQlEzQkNMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYjBKQlFXOUNMRU5CUVVNN1owSkJRelZETEUxQlFVMDdZVUZEVGp0WlFVTkVMRXRCUVVzc1dVRkJXU3hEUVVGRExFTkJRVU03WjBKQlEyeENMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYjBKQlFXOUNMRU5CUVVNN1owSkJRelZETEUxQlFVMDdZVUZEVGp0WlFVTkVMRXRCUVVzc2EwSkJRV3RDTEVOQlFVTXNRMEZCUXp0blFrRkRlRUlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl3d1FrRkJNRUlzUTBGQlF6dG5Ra0ZEYkVRc1RVRkJUVHRoUVVOT08xbEJRMFFzUzBGQlN5eHZRa0ZCYjBJc1EwRkJReXhEUVVGRE8yZENRVU14UWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHMUNRVUZ0UWl4RFFVRkRPMmRDUVVNelF5eE5RVUZOTzJGQlEwNDdXVUZEUkN4TFFVRkxMR05CUVdNc1EwRkJReXhEUVVGRE8yZENRVU53UWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIbENRVUY1UWl4RFFVRkRPMmRDUVVOcVJDeE5RVUZOTzJGQlEwNDdXVUZEUkN4TFFVRkxMRmRCUVZjc1EwRkJReXhEUVVGRE8yZENRVU5xUWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHMUNRVUZ0UWl4RFFVRkRPMmRDUVVNelF5eE5RVUZOTzJGQlEwNDdXVUZEUkN4TFFVRkxMSEZDUVVGeFFpeERRVUZETEVOQlFVTTdaMEpCUXpOQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NaME5CUVdkRExFTkJRVU03WjBKQlEzaEVMRTFCUVUwN1lVRkRUanRaUVVORUxFdEJRVXNzV1VGQldTeERRVUZETEVOQlFVTTdaMEpCUTJ4Q0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NlVUpCUVhsQ0xFTkJRVU03WjBKQlEycEVMRTFCUVUwN1lVRkRUanRaUVVORUxFdEJRVXNzZDBKQlFYZENMRU5CUVVNc1EwRkJRenRuUWtGRE9VSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh0UTBGQmJVTXNRMEZCUXp0blFrRkRNMFFzVFVGQlRUdGhRVU5PTzFsQlEwUXNTMEZCU3l4VlFVRlZMRU5CUVVNc1EwRkJRenRuUWtGRGFFSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXd3UWtGQk1FSXNRMEZCUXp0blFrRkRiRVFzVFVGQlRUdGhRVU5PTzFsQlEwUXNTMEZCU3l4eFFrRkJjVUlzUTBGQlF5eERRVUZETzJkQ1FVTXpRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITERSQ1FVRTBRaXhEUVVGRE8yZENRVU53UkN4TlFVRk5PMkZCUTA0N1dVRkRSQ3hMUVVGTExGbEJRVmtzUTBGQlF5eERRVUZETzJkQ1FVTnNRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhGQ1FVRnhRaXhEUVVGRE8yZENRVU0zUXl4TlFVRk5PMkZCUTA0N1dVRkRSQ3hMUVVGTExHRkJRV0VzUTBGQlF5eERRVUZETzJkQ1FVTnVRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhOQ1FVRnpRaXhEUVVGRE8yZENRVU01UXl4TlFVRk5PMkZCUTA0N1UwRkRSRHRSUVVWRUxFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSVHRaUVVOcVF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRGhDUVVFNFFpeEhRVUZITEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU42Unp0aFFVRk5MRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eGxRVUZsTEVOQlFVTXNSVUZCUlR0WlFVTTVReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITERSQ1FVRTBRaXhIUVVGSExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETzFOQlEyaEhPMkZCUVUwc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVN1dVRkRPVVVzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4M1FrRkJkMElzUjBGQlJ5eFJRVUZSTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNN1UwRkROVWc3WVVGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1kwRkJZeXhEUVVGRExFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1JVRkJSVHRaUVVOcVJpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRmxCUVZrc1IwRkJSeXhSUVVGUkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTTdXVUZEYWtnc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eE5RVUZOTEVkQlFVY3NVVUZCVVN4RFFVRkRMR2RDUVVGblFpeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dFpRVU55Unl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSE8yZENRVU4wUWp0dlFrRkRReXhMUVVGTExFVkJRVVVzVjBGQlZ6dHZRa0ZEYkVJc1IwRkJSeXhGUVVGRkxHZERRVUZuUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eE5RVUZOTEVkQlFVTXNRMEZCUXl4RFFVRkRPMmxDUVVONlJqdG5Ra0ZEUkR0dlFrRkRReXhMUVVGTExFVkJRVVVzYVVKQlFXbENPMjlDUVVONFFpeEhRVUZITEVWQlFVVXNiMEpCUVc5Q0xFZEJRVWNzVVVGQlVTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExHZENRVUZuUWl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZsQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNN2FVSkJRM0JITzJGQlEwUXNRMEZCUVR0VFFVTkVPMkZCUVUwc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zUlVGQlJUdFpRVU55U0N4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGbEJRVmtzUjBGQlJ5eFJRVUZSTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zWVVGQllTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNN1dVRkRha2dzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4TlFVRk5MRWRCUVVjc1VVRkJVU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMR2RDUVVGblFpeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0VFFVTnlSenRoUVVGTkxFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4clFrRkJhMElzUTBGQlF5eEZRVUZGTzFsQlEycEVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYTBKQlFXdENMRWRCUVVjc1VVRkJVU3hEUVVGRExITkNRVUZ6UWl4RFFVRkRMRGhEUVVFNFF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNN1UwRkRPVW83WVVGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExHbENRVUZwUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVU3V1VGRGVFWXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhWUVVGVkxFZEJRVWNzVVVGQlVTeERRVUZETEhOQ1FVRnpRaXhEUVVGRExEaERRVUU0UXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhaUVVGWkxFTkJRVU03VTBGRE9VbzdTMEZEUkR0VFFVRk5MRWxCUVVrc1VVRkJVU3hMUVVGTExITkNRVUZ6UWl4RlFVRkZPMUZCUXk5RExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NLMEpCUVN0Q0xFTkJRVU03VVVGRGRrUXNVVUZCVVN4UlFVRlJMRVZCUVVVN1dVRkRha0lzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXp0blFrRkRWQ3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEZkQlFWY3NRMEZCUXp0blFrRkRha01zVFVGQlRUdGhRVU5PTzFsQlEwUXNTMEZCU3l4aFFVRmhMRU5CUVVNc1EwRkJRenRuUWtGRGJrSXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXh4UWtGQmNVSXNRMEZCUXp0blFrRkRNME1zVFVGQlRUdGhRVU5PTzFsQlEwUXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJRenRuUWtGRFppeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMSFZDUVVGMVFpeERRVUZETzJkQ1FVTTNReXhOUVVGTk8yRkJRMDQ3V1VGRFJDeExRVUZMTEUxQlFVMHNRMEZCUXl4RFFVRkRPMmRDUVVOYUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NiMEpCUVc5Q0xFTkJRVU03WjBKQlF6RkRMRTFCUVUwN1lVRkRUanRaUVVORUxFdEJRVXNzVVVGQlVTeERRVUZETEVOQlFVTTdaMEpCUTJRc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eHRRa0ZCYlVJc1EwRkJRenRuUWtGRGVrTXNUVUZCVFR0aFFVTk9PMWxCUTBRc1MwRkJTeXhOUVVGTkxFTkJRVU1zUTBGQlF6dG5Ra0ZEV2l4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExHbENRVUZwUWl4RFFVRkRPMmRDUVVOMlF5eE5RVUZOTzJGQlEwNDdXVUZEUkN4TFFVRkxMRTFCUVUwc1EwRkJReXhEUVVGRE8yZENRVU5hTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc09FSkJRVGhDTEVOQlFVTTdaMEpCUTNCRUxFMUJRVTA3WVVGRFRqdFpRVU5FTEV0QlFVc3NWVUZCVlN4RFFVRkRMRU5CUVVNN1owSkJRMmhDTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc05FSkJRVFJDTEVOQlFVTTdaMEpCUTJ4RUxFMUJRVTA3WVVGRFRqdFpRVU5FTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNN1owSkJRMllzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4clFrRkJhMElzUjBGQlJ5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNN1owSkJReTlITEUxQlFVMDdZVUZEVGp0VFFVTkVPMUZCUlVRc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUXpkQ0xGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NWVUZCVlN4SFFVRkhMRkZCUVZFc1EwRkJReXh6UWtGQmMwSXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExGbEJRVmtzUTBGQlF6dFpRVU40U0N4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSE8yZENRVU4wUWp0dlFrRkRReXhMUVVGTExFVkJRVVVzWTBGQll6dHZRa0ZEY2tJc1IwRkJSeXhGUVVGRkxHbERRVUZwUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmxDUVVOcVJUdGhRVU5FTEVOQlFVRTdVMEZEUkR0aFFVRk5MRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlR0WlFVTndReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEZsQlFWa3NSMEZCUnl4UlFVRlJMRU5CUVVNc2MwSkJRWE5DTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEZkQlFWY3NSVUZCUlN4SlFVRkpMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU03V1VGRGVrZ3NXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhMUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETEhOQ1FVRnpRaXhEUVVGRExHZENRVUZuUWl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRaUVVNeFJ5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhPMmRDUVVOMFFqdHZRa0ZEUXl4TFFVRkxMRVZCUVVVc1YwRkJWenR2UWtGRGJFSXNSMEZCUnl4RlFVRkZMRkZCUVZFc1EwRkJReXhIUVVGSE8ybENRVU5xUWp0aFFVTkVMRU5CUVVFN1UwRkRSRHRMUVVORU8wbEJSVVFzU1VGQlNTeFpRVUZaTEVOQlFVTXNUMEZCVHp0UlFVRkZMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdPMUZCUTNoRUxGRkJRVkVzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0QlFVTTNRaXhEUVVGRExFTkJRVU1zUTBGQlF5SjkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
