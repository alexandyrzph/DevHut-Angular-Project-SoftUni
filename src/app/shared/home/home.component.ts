import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    imgPath: string = 'https://th.bing.com/th/id/R.124df381aa1358a940624eeb9693bff6?rik=WwSQ%2fNthGGEZIA&riu=http%3a%2f%2fwww.wallpapersin4k.org%2fwp-content%2fuploads%2f2016%2f12%2fHacking-Wallpapers-7.jpg&ehk=uyMLWZRbLxaMcW2Rft204D6dBEcfkrrOoUch00ZZSq0%3d&risl=&pid=ImgRaw&r=0';

    constructor() { }

    ngOnInit(): void {
    }

}
