import { Component, OnInit } from '@angular/core';
import anime from 'animejs';
import { trigger, state, style, animate, transition } from '@angular/animations';

declare var $: any;

@Component({
  selector: 'app-wedding-party',
  templateUrl: './wedding-party.component.html',
  styleUrls: ['./wedding-party.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(100%)'}))
      ])
    ])
  ]
})
export class WeddingPartyComponent implements OnInit {

  constructor() { }

  showDesc = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
  weddingPartyHis = [{
    name: "Guard",
    title: "Best Man",
    desc: "Guard is my older brother and currently resides in New Martinsville, WV. Though separated by seven years, Guard has always had my back, and we are constantly giving our mother a headache. Guard is a firefighter and EMT for the city of New Martinsville. If he is not out fighting fires, you can find him on his boat fishing!",
    photo: "url('https://firebasestorage.googleapis.com/v0/b/engagement-site.appspot.com/o/Guard.JPG?alt=media&token=4158ce64-859d-4374-aed6-6c11e944211c')"
  }, {
    name: "Hans",
    title: "Groomsman/Officiant",
    desc: "Hans is Carole's older brother and currently lives in Gaithersburg, MD. After a brief courting period, Hans and I have become as close as brothers. He is a great conversationalist and can speak intelligently on almost any subject, so be sure to find him at the reception! Carole and I are honored to have him serve as our Officiant.",
    photo: "url('https://firebasestorage.googleapis.com/v0/b/engagement-site.appspot.com/o/Hans.JPG?alt=media&token=01dc4383-ffc4-47cd-adba-ba8f5082d3ae')"
  }, {
    name: "Jake",
    title: "Groomsman",
    desc: "The Blatt's house was like a second home for me, and Jake is one of my oldest friends. Growing up in New Martinsville, Jake and I have done everything from basketball to Jimmy Buffett concerts together. Jake is a graduate of WVU and currently lives in Wheeling, WV.",
    photo: "url('https://firebasestorage.googleapis.com/v0/b/engagement-site.appspot.com/o/Jake.PNG?alt=media&token=8931d2f8-f411-434c-979b-116447386522')"
  }, {
    name: "Ethan",
    title: "Groomsman",
    desc: "I met Ethan freshman year of college while studying computer science. We quickly became friends and spent the remaining three years as roommates. After a few hundred hours of video games and the occasional beer, we became thick as thieves. Ethan is recently engaged and lives in Dallas, TX working as a Java Programmer.",
    photo: "url('https://firebasestorage.googleapis.com/v0/b/engagement-site.appspot.com/o/Ethan.png?alt=media&token=55823261-5190-4518-b23c-73cd933d74eb')"
  }, {
    name: "Zach",
    title: "Groomsman",
    desc: "Zach is another hometown friend of mine. We share a love of basketball, whiskey, and great times with friends. Zach calls Morgantown, WV home, alongside his wife, Jennifer, and their beautiful girl, Kinley.",
    photo: "url('https://firebasestorage.googleapis.com/v0/b/engagement-site.appspot.com/o/Zach.png?alt=media&token=f7f39e02-0857-4ad7-9868-5134416dbd9c')"
  }, {
    name: "Taylor",
    title: "Groomsman",
    desc: "Taylor, or just 'Shep' if you know him, is another product of New Martinsville, WV. Shep spent most of our time growing up trying to convince me to play football (...succeeding a few times). A constant supporter and friend, Shep now lives in Glendale, WV and is newly married to his wife Kate.",
    photo: "url('https://firebasestorage.googleapis.com/v0/b/engagement-site.appspot.com/o/Taylor.JPG?alt=media&token=8bffdd58-e5d3-4c68-b75f-9a29f187300e')"
  }, {
    name: "Craig",
    title: "Groomsman",
    desc: "Craig, a decorated decathlete, also attended Wheeling Jesuit University. A few years after college, we linked up again when Craig invited me to come live with him in DC, where I met Carole. I may have moved to Charlotte, but we remain great friends. Craig still lives in Washington, DC and is recently engaged to his fiancée, Tirana.",
    photo: "url('https://firebasestorage.googleapis.com/v0/b/engagement-site.appspot.com/o/Craig.JPG?alt=media&token=6f10bdf2-4345-4087-b9f7-1bb2f3f244f3')"
  }, {
    name: "Francois",
    title: "Groomsman",
    desc: "Francois and I met at one of Carole's work events in DC a few years ago (He was there with his now wife, Dyna - Carole's coworker). Unbeknownst to us, we both worked for Deloitte but in separate areas. We quickly bonded and became great friends. Francois is one of the nicest guys you'll ever meet and is always up for a good time. Francois and Dyna recently married July and live in Arlington, VA.",
    photo: "url('https://firebasestorage.googleapis.com/v0/b/engagement-site.appspot.com/o/Francois.png?alt=media&token=818f2ddf-8793-4dbb-857a-cf4f05a6b0a3')"
  }];
  
  weddingPartyHers = [
    {
      name: "Brittani",
      title: "Maid of Honor",
      desc: "As my Maid of Honor and also my best friend, Brittani has provided me with consistent support through all things good and bad. We spent much of our childhood (and adult life) scream-singing at Backstreet Boys concerts and annoying our parents with perfectly choreographed routines to Mr. Brightside and other 00’s hits. Brittani brings a special kind of joy and laughter to all who surround her, and she continues to bring happiness to the lives of others by working with the National Coalition for Cancer Survivorship in Washington D.C.",
      photo: "url('https://firebasestorage.googleapis.com/v0/b/engagement-site.appspot.com/o/britt.jpg?alt=media&token=ccf2fc10-20c1-48a9-a426-11f1b95eb05f')"
    },{
      name: "Mariah",
      title: "Bridesmaid",
      desc: "Playing basketball at Colgate University brought Mariah and I together. We won some games, lost a lot, but we made unforgettable memories along the way. We enjoyed a short time living in DC together, dancing the weekends away and having way too much fun! Even though she is an avid Croc-wearer, Mariah was a great teammate and continues to be an even better friend. She currently resides in Maryland with her boisterous cat, Seth.",
      photo: "url('https://firebasestorage.googleapis.com/v0/b/engagement-site.appspot.com/o/mariah.png?alt=media&token=83c0ea1f-255e-42b0-8a3f-b808033b5ddc')"
    },{
      name: "James",
      title: "Bridesman",
      desc: "James and I first met before college at an elite basketball camp, not knowing we would later become teammates, roommates, and great friends at Colgate. He is a kind-hearted person, and even though he continuously ate all of our Cheerios immediately after opening them, he will always be someone that I want in my corner. James currently lives in Pottstown, PA.",
      photo: "url('https://firebasestorage.googleapis.com/v0/b/engagement-site.appspot.com/o/james.png?alt=media&token=aa2142db-aab5-4480-b80d-231d1d9242bd')"
    },{
      name: "Dyna",
      title: "Bridesmaid",
      desc: "I met Dyna after working with her in Washington D.C. We quickly became friends, and though I recently moved to Charlotte, our friendship has only become stronger through the move. Dyna is the kindest and most thoughtful human, and she is also willing to go to battle for anyone she loves. She currently lives in Virginia with her husband, Francios, and their dog, Domino.",
      photo: "url('https://firebasestorage.googleapis.com/v0/b/engagement-site.appspot.com/o/dyna.png?alt=media&token=b4a53492-14ea-4e93-930c-ea16e51c3af7')"
    },{
      name: "Laura",
      title: "Bridesmaid",
      desc: "Laura is one of my many fascinating cousins! We spent many childhood summers together in New Jersey binge-watching movies and playing DDR. When we’re not whispering jokes to each other, we are quite often shouting them out loud. Laura enjoys bonding over her Jesuit education with Colt and speaking passionately about her alma mater. She continues to share her love for Fordham University as an Alumni Relations Officer in NYC.",
      photo: "url('https://firebasestorage.googleapis.com/v0/b/engagement-site.appspot.com/o/laura.png?alt=media&token=6e7d0b24-2e02-49bc-83c2-2994fb8b0440')"
    },{
      name: "Gwen",
      title: "Bridesmaid",
      desc: "Gwen, another cousin and close friend of mine, lives in Florida assisting the local police department with CSI work - crazy, cool, and scary at the same time. Gwen has always been fearless and shown a great love of animals (I am uncertain how many animals she currently owns). Her kind heart and smile light up any room she enters!",
      photo: "url('https://firebasestorage.googleapis.com/v0/b/engagement-site.appspot.com/o/gwen.png?alt=media&token=dbd6473b-cbe3-4642-bc92-fd1765953b82')"
    },{
      name: "Anna",
      title: "Bridesmaid",
      desc: "Another cousin and close friend of mine, Anna, is intelligent, warm, and bright. I have very fond memories of spending our summers under her direction, producing, performing, and recording plays that she had written. We have only grown closer with age, and I am more than happy to have her in my bridal party. Anna resides in the NYC area with her now husband, Matt Levy.",
      photo: "url('https://firebasestorage.googleapis.com/v0/b/engagement-site.appspot.com/o/anna.png?alt=media&token=d02c9eb7-ff4f-44ca-8213-e5dcbe4c804d'"
    }
  ];
  activeInfo: any;
  activeDescription: any;
  activePhoto: any;
  showModalContent = false;
  id: any;
  isMobile = false;

  ngOnInit() {
    let svc = this;
    $('#modal-container').click(function(){
      $(this).addClass('out');
      $(this).removeClass("six");
      $('body').removeClass('modal-active');
      $('#card-' + svc.id).css('opacity', '1');
      this.showModalContent = false;
    });

    
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
      this.isMobile = true;
    }
  }

  showModal(id, type) {
    this.id = id + 1;
    $('#card-' + this.id).css('opacity', '0.1');
    $('#modal-container').removeAttr('class').addClass("six");
    $('body').addClass('modal-active');
    if(type === "His") {
      this.activeInfo = this.weddingPartyHis[id].name;
      this.activePhoto = this.weddingPartyHis[id].photo;
      // this.activePhoto = this.weddingPartyHis[id].photo.match(/'([^']+)'/)[1];
      this.activeDescription = this.weddingPartyHis[id].desc;
    } else {
      this.activeInfo = this.weddingPartyHers[id].name;
      this.activePhoto = this.weddingPartyHers[id].photo.match(/'([^']+)'/)[1];
      this.activeDescription = this.weddingPartyHers[id].desc;
    }
  }

  animate(id) {
    if (!this.isMobile) {
      this.showDesc[id - 1] = !this.showDesc[id - 1];
      anime({
        targets: ['#card-' + id],
        translateX: 10,
        translateY: 10,
        translateZ: 30,
        rotateX: 0,
        rotateY: -10,
        rotateZ: 0,
        duration: 200,
        easing: 'easeOutQuad'
      });
      anime({
        targets: ['#overlay-' + id],
        translateX: 10,
        translateY: -10,
        translateZ: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 2,
        duration: 1000,
        opacity: .2,
        easing: 'easeOutExpo'
      });
      anime({
        targets: ['#border-' + id],
        translateX: 10,
        translateY: 10,
        translateZ: [0, 70],
        rotateX: 0,
        rotateY: 0,
        rotateZ: -1,
        duration: 1000,
        easing: 'easeOutExpo'
      });
      anime({
        targets: ['#caption-' + id],
        translateX: 0,
        translateY: 0,
        translateZ: -10,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        duration: 200,
        easing: 'easeOutQuad'
      });

    }
  }

  deanimate(id) {
    if (!this.isMobile) {
      this.showDesc[id - 1] = !this.showDesc[id - 1];
      anime.remove('#card-' + id);
      anime.remove('#caption-' + id);
      anime.remove('#overlay-' + id);
      anime.remove('#border-' + id);
      anime.remove('#shine-' + id);
      setTimeout(function () {
        anime({
          targets: ['#card-' + id],
          translateX: 0,
          translateY: 0,
          translateZ: 0,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          duration: 200,
          easing: 'easeOutQuad'
        });
        anime({
          targets: ['#overlay-' + id],
          translateX: 0,
          translateY: 0,
          translateZ: 0,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          duration: 200,
          opacity: .8,
          easing: 'easeOutExpo'
        });
        anime({
          targets: ['#border-' + id],
          translateX: 0,
          translateY: 0,
          translateZ: 0,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          duration: 200,
          opacity: 1,
          easing: 'easeOutExpo'
        });
        anime({
          targets: ['#caption-' + id],
          translateX: 0,
          translateY: 0,
          translateZ: 0,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          duration: 200,
          easing: 'easeOutQuad'
        });
      }, 100);
    }
  }
}
