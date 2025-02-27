const presence = new Presence({
	clientId: "643771565951025153",
});

presence.on("UpdateData", async () => {
	const page = document.location.pathname,
		postTitle = document.querySelector(
			"#content-body-area > div > div > div.content-heading > h1"
		);

	if (page.includes("/kategori/")) {
		const category =
			document.title[0].toUpperCase() +
			document.title
				.replace(" - Ekşi Şeyler", "")
				.slice(1, document.title.length)
				.toLowerCase();

		presence.setActivity({
			largeImageKey: "es-logo",
			details: "Bir kategoriye göz atıyor:",
			state: category || "Belirsiz",
			startTimestamp: Math.floor(Date.now() / 1000),
		});
	} else if (page.includes("/kanal/")) {
		const channel =
			document.title[0].toUpperCase() +
			document.title
				.replace(" - Ekşi Şeyler", "")
				.slice(1, document.title.length)
				.toLowerCase();

		presence.setActivity({
			largeImageKey: "es-logo",
			details: "Bir kanala göz atıyor:",
			state: channel || "Belirsiz",
			startTimestamp: Math.floor(Date.now() / 1000),
		});
	} else if (page.includes("/derleme/arama/")) {
		const searchingFor = document.querySelector(
			"#main-content > div > div > div.search-result-info > span"
		);

		presence.setActivity({
			largeImageKey: "es-logo",
			details: "Bir şey arıyor:",
			state:
				searchingFor && searchingFor.textContent !== ""
					? searchingFor.textContent
					: "Belirsiz",
			startTimestamp: Math.floor(Date.now() / 1000),
		});
	} else if (postTitle && postTitle.textContent !== "") {
		presence.setActivity({
			largeImageKey: "es-logo",
			details: "Bir gönderiyi okuyor:",
			state: postTitle.textContent || "Belirsiz",
			startTimestamp: Math.floor(Date.now() / 1000),
		});
	} else {
		presence.setActivity({
			largeImageKey: "es-logo",
			details: "Bir sayfaya göz atıyor:",
			state: "Ana Sayfa",
			startTimestamp: Math.floor(Date.now() / 1000),
		});
	}
});
