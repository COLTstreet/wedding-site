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
    desc: "Guard is Colt's older brother and currently resides in New Martinsville, WV. Though separated by seven years, Guard has always had Colt's back, and they are constantly giving their mother a headache. Guard is a firefighter and EMT for the city of New Martinsville. If he is not out fighting fires, you can find him on his boat fishing!"
  }, {
    name: "Hans",
    title: "Groomsman/Officiant",
    desc: "Hans is Carole's older brother and currently lives in Gaithersburg, MD. After a brief courting period, Hans and Colt have become as close as brothers. He is a great conversationalist and can speak can intelligently on almost any subject, so be sure to find him at the reception! Carole and Colt are honored to have him serve as their Officiant."
  }, {
    name: "Jake",
    title: "Groomsman",
    desc: "The Blatt's house was like a second home for Colt, and Jake is one of Colts oldest friends. Growing up in New Martinsville, Colt and Jake have done everything from basketball to Buffett concerts together. Jake is a graduate of WVU and currently lives in Wheeling, WV."
  }, {
    name: "Ethan",
    title: "Groomsman",
    desc: "Colt met Ethan freshman year of college while studying computer science. They quickly became friends and spent the remaining three years as roommates. After a few hundred hours of video games and the occasional beer, they became thick as thieves. Ethan is recently engaged and lives in Dallas, TX and works as a Java Programmer."
  }, {
    name: "Zach",
    title: "Groomsman",
    desc: "Zach is another hometown friend of Colts. They share a love of basketball, whiskey, and great times with friends. Zach calls Morgantown, WV home, alongside his wife Jennifer and their beautiful girl, Kinley."
  }, {
    name: "Taylor",
    title: "Groomsman",
    desc: "Taylor, or just 'Shep' if you know him, is another product of New Martinsville, WV. Shep spent most of his time trying to convince Colt to play football in the upcoming season, and succeeded a few times! A constant supporter and friend, Shep now lives in Glendale, WV and is newly married to his wife Kate."
  }, {
    name: "Craig",
    title: "Groomsman",
    desc: "Craig, a decorated decathlete, also went to Wheeling Jesuit with Colt. A few years after college, the two linked up again when Craig invited Colt to come live with him in DC, where Colt met Carole. Colt has since moved to Charlotte but the two remain great friends. Craig still lives in Washington, DC and is recently engaged to his fiancée, Tirana."
  }, {
    name: "Francois",
    title: "Groomsman",
    desc: "Colt only met Francois a few years ago in DC through Carole's bridesmaid Dyna, when the two worked together. Turned out they both worked for Deloitte, but in separate areas. They quickly bonded and became great friends. Francois is one of the nicest guys you'll ever meet and is always up for a good time. Francois and Dyna will be married this July and live in Arlington, VA."
  }];
  
  weddingPartyHers = [
    {
      name: "Brittani",
      title: "Maid of Honor",
      desc: "Description"
    },{
      name: "James",
      title: "Bridesmaid"
    },{
      name: "Mariah",
      title: "Bridesmaid"
    },{
      name: "Laura",
      title: "Bridesmaid"
    },{
      name: "Anna",
      title: "Bridesmaid"
    },{
      name: "Gwen",
      title: "Bridesmaid"
    },{
      name: "Dyna",
      title: "Bridesmaid"
    }
  ];
  activeInfo: any;
  activeDescription: any;
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
      this.activeDescription = this.weddingPartyHis[id].desc;
    } else {
      this.activeInfo = this.weddingPartyHers[id].name;
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
