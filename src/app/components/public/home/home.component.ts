import { Component, OnInit } from '@angular/core';
declare var $;
declare var window;
declare var google;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carousel = [
    { title: "Start Your Day Right with Our Breakfast Sandwiches", description: "Indulge in our mouthwatering breakfast sandwiches at [Restaurant Name]. Crafted to perfection, our diverse selection—from classic eggs, cheese, and bacon to gourmet options—offers something for every palate. Enjoy a symphony of taste and quality with every bite." },
    {
      title: "Morning Bliss with Our Breakfast Sandwiches", description: `Come visit EZ Check and treat yourself to a breakfast sandwich that’s sure to brighten your morning.
                    Whether you’re dining in, taking out, or grabbing a bite on the go, our delicious breakfast
                    sandwiches are the perfect way to fuel your day.` },
    { title: "Convenience Meets Customization", description: "We understand mornings can be hectic, so our breakfast sandwiches are designed for convenience and quality. Whether you're on the go or enjoying a leisurely breakfast, our sandwiches meet your needs. With customizable options, you can tailor your sandwich to suit your tastes and dietary preferences. Visit EZ for the perfect start to your day." }
  ];

  feedbacks = [
    { feedback: 'The breakfast sandwiches at EZ check are a game-changer! The flavors are incredible, and they make my mornings so much better.', customerName: 'Sarah J', image: '/assets/images/client1.jpg' },
    { feedback: `I love how customizable the breakfast sandwiches are. I can always get exactly what I want, and they're perfect for my busy mornings`, customerName: 'Mike T', image: '/assets/images/client2.jpg' },
    { feedback: 'The Classic Morning Delight is a breakfast staple for me. Perfectly cooked and always served fresh. A great start to my day!.', customerName: 'Alex H', image: '/assets/images/client1.jpg' },
    { feedback: 'I appreciate how quick and easy it is to grab a breakfast sandwich here. The quality is always top-notch, and it makes my mornings hassle-free.', customerName: 'Rachel B', image: '/assets/images/client2.jpg' },
    { feedback: 'Every time I visit [Restaurant Name], the breakfast sandwiches exceed my expectations. Great flavors, quality ingredients, and fast service!.', customerName: 'Daniel S', image: '/assets/images/client1.jpg' },
    { feedback: `These are the best breakfast sandwiches I've ever had! Fresh ingredients and great taste in every bite. Highly recommend!.`, customerName: 'Tony L', image: '/assets/images/client2.jpg' },

  ]

  aboutUs = {
    title: 'Sumanth Eredy', description: `Discover the ultimate dining experience at EZ,
            where culinary excellence meets a cozy and inviting atmosphere.
            Located in the heart of Linden,
            our deli is the perfect destination for sandwiches seeking a memorable morning breakfast`,
    image: '/assets/images/about-img.png'
  }
  constructor() { }

  ngOnInit(): void {
    // this.initMap();

  }
  createMarker(width, height, radius) {
    var canvas, context;
    canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    context = canvas.getContext("2d");
    context.clearRect(0, 0, width, height);
    context.fillStyle = "red";
    context.strokeStyle = "red";
    context.beginPath();
    context.moveTo(radius, 0);
    context.lineTo(width - radius, 0);
    context.quadraticCurveTo(width, 0, width, radius);
    context.lineTo(width, height - radius);
    context.quadraticCurveTo(width, height, width - radius, height);
    context.lineTo(radius, height);
    context.quadraticCurveTo(0, height, 0, height - radius);
    context.lineTo(0, radius);
    context.quadraticCurveTo(0, 0, radius, 0);
    context.closePath();
    context.fill();
    context.stroke();
    return canvas.toDataURL();
  }

  ngAfterViewInit() {
    $(".owl-carousel").owlCarousel();
    // window.initMap = () => {
    //   let map = new google.maps.Map(document.getElementById("googleMap") as HTMLElement, {
    //     center: { lat: 40.63761990949317, lng: -74.2650747175528 },
    //     zoom: 18
    //   });

    //   let marker = new google.maps.Marker({
    //     position: { lat: 40.63761990949317, lng: -74.2650747175528 },
    //     map,
    //     icon: {
    //       url: this.createMarker(25, 25, 4),
    //       labelOrigin: new google.maps.Point(-52, 41)
    //     },
    //     label: {
    //       text: "EZ Check Food Store",
    //       color: 'white',
    //       // anchor:
    //       fontSize: '16px',
    //       fontWeight: 'bold',


    //     },

    //     // // label: "EZ", labelContent: "OneWay's Home",
    //     // labelAnchor: new google.maps.Point(-20, 10),
    //     // // labelClass: "markerLabel", // the CSS class for the label
    //     // labelStyle: {
    //     //   opacity: 0.75
    //     // }
    //   });
    //   marker.setMap(map)
    // }
  }
  // initMap() {
  //   let map
  //   map = new google.maps.Map(document.getElementById("googleMap"), {
  //     center: { lat: 0, lng: 0 },
  //     zoom: 4
  //   });
  // }
}
