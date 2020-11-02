import { Component } from "@angular/core";
import { Plugins } from "@capacitor/core";

const { ListView } = Plugins;

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor() {}

  launchListView() {
    ListView.present({
      items: [
        "This",
        "is",
        "a",
        "native",
        "iOS",
        "UITableView",
        "displayed",
        "over",
        "the",
        "top",
        "of",
        "the",
        "WKWebView",
        "that",
        "contains",
        "the",
        "Ionic",
        "application",
        "It",
        "is",
        "somewhat",
        "impractical",
        "but",
        "may",
        "be",
        "useful",
        "in",
        "specific",
        "circumstances",
      ],
    });
  }
}
