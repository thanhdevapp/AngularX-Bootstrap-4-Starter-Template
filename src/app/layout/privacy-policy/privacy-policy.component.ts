import { Component, OnInit } from '@angular/core';

declare var $;
@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  contentData: any[] = [
    {
      title:'1. About this Privacy Policy',
      content:`World Market Bazar Pty Ltd (ACN 617 027 317) (WMB “we” or “us”) owns and operates the Marco Website (the Website) located at www.themarcoapp.com.au as well as the Marco App (the App) together the “Marco Services. The App and Website allow you to access listings and information about markets, stallholders, food vans and retailers (Merchants).<p/>
      While we have not opted into being treated as an organisation for the purpose of the Privacy Act 1988 (Cth) (Privacy Act), the Privacy Amendment (Enhancing Privacy Protection) Act 2012 (Cth) and the Privacy (Credit Reporting) Code 2014 (Privacy Code), we are committed to protecting your privacy.<p/>
      This Privacy Policy explains how your personal information will be treated as you access and interact with the Marco Services. `,
    },
    {
      title:'2. Personal Information collected',
      content:`The information that we collect about you depends on how you use the Marco Services and how interact with us.<p/>
      You can use the App and visit and browse the Website without disclosing any personal information. Our system may record information such as the date and time of your visit, your computer’s IP address, the pages accessed, and any information downloaded. This information is used for statistical, reporting and website administration and maintenance purposes.<p/>
      We collect personal information from you if you register for the Marco Services or update your profile, such as your name, email address, telephone numbers and social media profiles.<p/>
      Once you have registered we also collect information about your use of the Marco Services and information that you provide while you use the Marco Services. This information may include your location and your device’s IP address. Your location is only recorded by us while the App is running, although note that your device may have the ability to run apps in the background in which case you may need to specifically shut down the App to stop location recording.<p/>
      We may combine the personal information we collect from you with information that we receive from and about you in other contexts and from other sources, including third parties.`,
    },
    {
      title:'3. Use and disclosure of information',
      content:`We use and disclose personal information in various limited circumstances including where you consent, where we have told you, where you would expect us to or where we are otherwise authorised by law.<p/>
      We use your personal information to:`,
      lst:[
        {value:'Help us develop, improve and deliver our services'},
        {value:'Provide you with information and listings that you request or that we think may be of interest to you'},
        {value:'Gather feedback on our services.'},
        {value:'Notify you about changes to our services.'},
        {value:'Carry out or respond to your requests;'},
        {value:'Display tailored advertising content when you use the Marco Services (although note that we do not disclose your personal information to advertisers);'},
        {value:'Respond to information requests from courts, government agencies and lawyers where we reasonably believe disclosure is required by law;'},
        {value:'Protect our lawful interests; and'},
        {value:'Other purposes outlined at the time you provide the information.'},
      ]
    },
    {
      title:'',
      content:`We may not be able to do these things without your personal information.<p/> 
      We may also provide your personal information to our service providers who assist us with customer contact, archiving, auditing, accounting, legal, business consulting, delivery, data processing, website or technology services.<p/> 
      Some of the third parties described above including our service providers and other users may be located in the USA. You acknowledge that where your personal information is provided to third parties outside Australia, we are not required to ensure that those parties comply with Australian privacy standards.`,
    },
    {
      title:'4. Sharing of information',
      content:`The App and the Website are specifically designed to provide a platform for a community of users to share their information and experiences. You can decide how much information you share. You do not have to use your real name as your username and you do not have to give details of your social media profiles.  If you do these things, that information may be accessible by other users.<p/>
      Where you provide information that allows others to identify you as a real person, then be aware that all of the other information related to your username on the App and the Website may also be identified with you.`,
    },
    {
      title:'5. Website technology',
      content:`The Website also uses "cookies" (small data files that are sent to your computer). These cookies do not collect personal information. They assist us to make your experience of the Website easier and more efficient for you. For instance, if you choose to personalise your use of the Website, the cookies will enable it to remember your preferred settings for your subsequent visits.<p/>
      You can adjust your Internet browser to disable cookies or to warn you when cookies are being used.  However, if you disable cookies, you may not be able to access certain areas of the Website or take advantage of the improved Marco Services experience that cookies offer.<p/>
      The Website also contains links to the websites of third parties.  These third parties may have their own privacy policies and approach to handling personal information which may differ from ours and which we recommend you review.`,
    },
    {
      title:'6. Accuracy of your information',
      content:'We take reasonable precautions to ensure that the personal information we collect, use and disclose is accurate, complete and up-to-date. However, the accuracy of that information depends to a large extent on the information you provide. That is why we recommend that you: ',
      lst:[
        {value:'Let us know if there are any errors in your personal information we hold; and '},
        {value:'Keep us up-to-date with changes to personal information you have previously provided.'}
      ]
    },
    {
      title:'7. Accessing your personal information',
      content:`Please contact us if you would like to request access to the personal information we hold about you. You will need to put your request in writing for, security reasons, and send it to the Privacy Officer as detailed in par 11 below.<p/>
      Please provide us with as much detail as you can about the particular information you seek, in order to help us retrieve it. `,
    },
    {
      title:'8. Security',
      content:`If you are considering sending us any personal information through the App, the Website or other electronic means, please be aware that the information may be insecure in transit, particularly where no encryption is used (e.g. email, standard HTTP). We are subject to a number of laws requiring us to protect the security of personal information once it comes into our possession.<p/>
      If you have signed up as a registered user your account access is controlled by a username and password chosen by you. We recommend that you choose a strong password and keep it protected from others.`,
    },
    {
      title:'9. Children',
      content:`The Marco Services are not directed to children under the age of thirteen (13), and we do not knowingly collect personal information from such children.`,
    },
    {
      title:'10. Acceptance and Changes to Privacy Policy',
      content:`You acknowledge and accept that your use of the App and the Website indicate your acceptance of this Privacy Policy and our Terms of Use.<p/>
      This is the current Privacy Policy.  It replaces any other Privacy Policy for the App or Website published on the Website previously.<p/>
      We may at any time vary the Privacy Policy by publishing the varied Privacy Policy on the Website.<p/>  The new Privacy Policy will apply to information that we collect after the date that we post the change on the Website.
      If you do not agree with the change, then you must alter or cease your use of the Marco Services accordingly.`,
    },
    {
      title:'11. Further information',
      content:`If you have any questions, concerns or feedback about privacy, please contact:`,
    },
  ];

  constructor() { }

  ngOnInit() {
    this.onInitJavascript();
  }

  onInitJavascript(){
    setTimeout(function() {
        $('html,body').animate({
          scrollTop: 0
        }, 700);
    },100);
  }
}
