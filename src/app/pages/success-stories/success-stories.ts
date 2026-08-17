import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SuccessStory {
  image: string;
  title: string;
  category: string;
  description: string;
  result: string;
}

@Component({
  selector: 'app-success-stories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success-stories.html',
  styleUrl: './success-stories.css'
})
export class SuccessStories {

  stories: SuccessStory[] = [

    {
      image: 'images/image6.jpg',
      title: 'Laparoscopic Gallbladder Surgery',
      category: 'Gallbladder Surgery',
      description:
        'A minimally invasive gallbladder procedure performed using modern laparoscopic techniques.',
      result:
        'Patient recovered well and returned to normal activities after recovery.'
    },

    {
      image: 'assets/images/success/hernia.jpg',
      title: 'Laparoscopic Hernia Repair',
      category: 'Hernia Surgery',
      description:
        'Successful laparoscopic treatment of hernia using a minimally invasive surgical approach.',
      result:
        'Smooth recovery with reduced postoperative discomfort.'
    },

    {
      image: 'assets/images/success/appendix.jpg',
      title: 'Laparoscopic Appendectomy',
      category: 'Appendix Surgery',
      description:
        'Laparoscopic removal of the appendix using small surgical incisions.',
      result:
        'Patient recovered successfully following postoperative care.'
    },

    {
      image: 'assets/images/success/weight-loss.jpg',
      title: 'Weight Loss Surgery',
      category: 'Bariatric Surgery',
      description:
        'Surgical weight management procedure performed after appropriate patient evaluation.',
      result:
        'Patient continued follow-up and lifestyle management after surgery.'
    },

    {
      image: 'assets/images/success/general-surgery.jpg',
      title: 'General Surgical Procedure',
      category: 'General Surgery',
      description:
        'Successful surgical treatment with careful preoperative and postoperative management.',
      result:
        'Patient showed good recovery with regular follow-up.'
    },

    {
      image: 'assets/images/success/minimally-invasive.jpg',
      title: 'Minimally Invasive Surgery',
      category: 'Laparoscopic Surgery',
      description:
        'Modern minimally invasive surgical techniques used for appropriate patient cases.',
      result:
        'Successful recovery with appropriate postoperative care.'
    }

  ];

}
