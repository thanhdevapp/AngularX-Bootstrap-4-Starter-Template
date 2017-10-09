import { Component, OnInit } from '@angular/core';

declare var $;
@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent implements OnInit {

  contentData: any[] = [
    {
      title: `These Terms of Use are effective from [insert date].`,
      content: `Lliilliil Pty Ltd (ACN 617 027 317) (LLIILLIIL “we” or “us”) owns and operates the Marco Website (the Website) located at <a target="_blank" href='http://www.themarcoapp.com.au' class='content-link'>www.themarcoapp.com.au</a> as well as the Marco App (the App) together the “Marco Services”. Through the Marco Services we provide a user friendly listing platform that allows users to access information and to interact with the Marco community including by uploading information and images to the App and the Website.<p/>
      Please read and consider these terms of use (‘Terms ’) carefully before choosing whether to use the Marco Services. Your use of all text, graphics, user interfaces, visual interfaces, photographs, trade marks, logos, sounds, music, artwork, or other material used, displayed or available by way of the Marco Services (“Content’) is governed by these Terms of Use and our <a href="/privacy-policy" class='content-link'>Privacy Policy</a> (together the Marco <p/>Policies).`
    },
    {
      title: `1. The Marco Services`,
      content: `The Marco Services provide a marketplace in the form of a platform where users (Users) can view information including about markets, stallholders, food vans and merchants (Listings). Users may submit Content (your Content) to be included in the Marco Services. Content will be made available through the App and the Website.`
    },
    {
      title: `2. Acceptance of the Terms`,
      content: `By accessing or using the App or the Website, you accept and agree to these Terms without any limitation or qualification.  These Terms constitute a legally binding agreement between you and LLIILLIIL.  If you do not agree with the Marco Policies do not use the Marco Services.`
    },
    {
      title: `3. Changes to these Terms `,
      content: `These Terms are current at the effective date at the top of this document. We may amend these Terms through updates of the App and by placing the new Terms on the Website.  By you accepting any updates of the App or continuing to use the Marco Services, such amended Terms will apply from that point forward.<p/>
      If you do not agree with the new Terms of Use, then you must cease using the Marco Services.`
    },
    {
      title: `4. Using our Materials`,
      content: ``,
      lst: [
        { value: 'All rights in the App and the Website and the content on the App and the Website (excluding your Content), including without limitation copyright in the software comprising the App or the Website, our trade marks, text, graphics, photographs, images and videos (our Materials), are owned or licensed by us. '},
        { value: 'We grant you a non-exclusive, revocable, non-sublicensable, non-transferable licence to use our Materials for the purpose of using the Marco Services and for the App’s functionality '},
        { value:'You must not:', child: [
          { value: 'Otherwise reproduce, modify, adapt, translate, publish, upload to a third party, link to, distribute or transmit any of our Materials in any form without our specific prior written consent;'},
          { value: 'Remove, obscure or alter any proprietary rights notice (including copyright and trade mark) contained in, or accompanying, our Materials; '},
          { value: 'Use our Materials in any way for commercial gain or in any way that suggests that you are affiliated with, or endorsed by, us; or'},
          { value: 'Do any act which would bring our trade mark or us into disrepute or damage the goodwill or reputation of us or our trade mark. '}
        ]}
      ]
    },
    {
      title: `5. Using the Marco Services`,
      content: `You must not:`,
      lst: [
        {value:'Submit, or use the App or the Website to send, any unauthorised commercial communications (such as spam); '},
        {value:'Upload viruses, keyloggers, spyware, worms, trojan horses, timebombs or other malicious or harmful programming to the App or to the Website;'},
        {value:'By pass any measure we may use to prevent or restrict access to the App or the Website, any part of the App or the Website or any other software, systems or networks connected to the App or the Website;'},
        {value:'Reverse engineer, decipher, decompile, disassemble or in any other way attempt to derive any source code or underlying algorithms of any part of the App or the Website;'},   
        {value:'Create derivative works of any part of the App or the Website;'},     
        {value:'Rent, lease, lend, sell, transfer, redistribute, or sublicense the App or the Website; or'},
        {value:'Use any device, software or routine, or do anything that could interfere or attempt to interfere with the proper working of this App or the Website;'},
        {value: 'Use the App or the Website to defame, abuse, harass, stalk, threaten, breach the confidence of, or otherwise violate the legal rights (such as the right of privacy) of others;'},
        {value: 'Hack into any part of the App or the Website through password mining, phishing, or other means;'},
        {value: 'Circumvent the App or the Website’s structure, presentation or navigational function so as to obtain information that LLIILLIIL has chosen not to make publically available through the Website;'},
        {value: 'Disrupt an exchange of information between users of the App or the Website or otherwise act in a manner that negatively affects other users of the App or the Website, including through a denial-of-service attack;'},
        {value: 'Transmit any unsolicited advertising, promotional materials, surveys, chain letters or other forms of solicitation, unless expressly authorised by LLIILLIIL; '},
        {value: 'Harvest information about other users of the App or the Website in order to transmit, or facilitate the transmission of, such materials as listed in paragraph (g) above;'},
        {value: 'Attempt to modify, reverse engineer, or reverse assemble any part of the App or the Website;'},
        {value: 'Use the App or the Website to supply another service, or to obtain information which you either incorporate into your own service or product to enhance your service, product, or business in any way, such as to create potential customer lists. Any commercial use of the App or the Website requires the prior written approval of LLIILLIIL; '},
        {value: 'Breach any applicable laws or regulations; or'},
        {value: 'Engage in any other conduct which LLIILLIIL, in its absolute discretion, considers breaches these Terms.'},
      ],
      number: true
    },
    {
      title: '6. Terminating your use' ,
      content: '',
      lst: [
        {value: 'You may stop using the App or the Website at any time for any reason, without notifying us.'},
        {value: 'We may terminate, disable, block or suspend your access to the App or the Website immediately, if you breach, or we suspect on reasonable grounds that you have breached, these Terms or on 7 days’ notice to you, at any other time for any other reason.'},
    ]
    },
    {
      title: '7. Terminating your use',
      content: '',
      lst: [
        {value: 'You acknowledge that your Content is generated based on the information and data that you input into the Website and the App;'},
        {value: 'You are responsible for:', child: [
          {value: 'All of your activity on and in connection with the App and the Website (including your use of Third Party Sites and Tools, as defined in paragraphs 9 and10);'},
          {value: 'All of the content and details that you submit into the App and the Website;'},
          {value: 'Your Content; '},
          {value: 'What you access on the App and the Website;'},
          {value: 'How you interpret or use the App or the Website and your Content;'},
          {value: 'Any actions (including making phone calls, sending text messages and sending emails) that you may take as a result of the App, the Website or your Content.'},
        ]},
        {value:'You remain responsible for any breach of contract or infringement of any intellectual property or other rights of any third party in connection with your Content.'},
        {value:'We reserve the right to access, read, preserve and disclose any information as we reasonably believe is necessary to:',child:[
          {value:'Satisfy any law or regulation;'},
          {value:'Enforce these Terms, including investigation of potential violations of these Terms;'},
          {value:'Detect, prevent or otherwise address fraud, security or technical issues; or'},
          {value:'Respond to support issues.'},
        ]},
      ]
    },
    {
      title: '8. Your Consumer Rights',
      content: '',
      lst: [
        {value: 'Nothing in these Terms is intended to exclude, restrict or modify rights which you may have under any law (including the Australian Consumer Law) which may not be excluded, restricted or modified by agreement (your Consumer Rights). Your Consumer Rights include the right for goods and services to be fit for their specified purpose and to be provided with care and skill. You can find out more about your Consumer Rights from consumer organisations and bodies such as the Australian Competition and Consumer Commission and State/Territory fair trading authorities.'},
        {value: 'Subject to Your Consumer Rights, and clause (a) above, we are not liable:', child: [
          {value: 'For any business-related loss (howsoever caused, including by our negligence) including loss of revenue, profits, contracts, anticipated savings, data, goodwill, opportunity, reputation or productivity; and'},
          {value: 'To the extent that your loss was contributed to by you or any other matter outside of our reasonable control.'},
        ]},
        {value: 'Other than your Consumer Rights, any condition or warranty which would be implied by law into these Terms of Use is excluded.'},
        {value: 'If you suffer any loss in connection with the App or Website, you must take all reasonable steps to minimise your loss, including notifying us without delay if there are steps we can take to help minimise your loss.'},
      ]
    },
    {
      title: '9. Links to third party websites ',
      content: 'The App or Website may contain links to other websites or applications owned, operated or produced by third party organisations independent of us (Third Party Sites). The links are provided for convenience only and we have not verified and do not sponsor, endorse or approve the operators of, or any materials on (including information, products or services), those Third Party Sites.',
    },
    {
      title: '10. Third party tools',
      content: 'Certain tools, devices, software programs or other features (Tools) available on or through the App may be provided by third parties. These Tools are provided as a convenience to you. These Tools are not operated by us and we are not responsible for examining or evaluating the content, availability, accuracy, adequacy, timeliness, validity, copyright compliance, legality, decency, quality, completeness or any other aspect of these Tools.',
    },
    {
      title: '11. General',
      content: '',
      lst: [
        {value: 'If any provision of these Terms is invalid under the law of any jurisdiction, that provision is enforceable in that jurisdiction to the extent that it is not invalid, whether it is in severable terms or not.'},
        {value: 'These Terms are governed by the laws of Western Australia, Australia. The courts of Western Australia, Australia (and the courts of appeal from them) have exclusive jurisdiction to resolve any disputes arising under or in connection with these Terms'},
        {value: 'If we fail to enforce any of our rights under these Terms, that does not mean we waive those rights. If you fail to enforce any of your rights under these Terms, that does not mean you waive those rights.'},
        {value: 'These Terms are personal to you and you may not assign or otherwise transfer any rights under these Terms without our prior written consent. We may assign or otherwise transfer our rights and obligations under these Terms as we require. '},
      ]
    },
    {
      title: '',
      content: 'If you have any questions or complaints about the App or the Website, please contact us on the details below:',
    }
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
    }, 100);
  }
}
