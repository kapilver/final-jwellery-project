import React from 'react';
// import about2 from '../websites_images/download1.png';
import Faq from 'react-faq-component';

import 'bootstrap/dist/css/bootstrap.min.css';
const data = {
    title: "FAQ ( How it works )",
    rows: [
      {
        title: "1 Ask yourself - what do I want?",
        content: "Many shoppers will begin their search for jewellery online, but visiting a jewellery store or jewellery exhibition is a must - it’s a chance to see designs up close and talk with an expert about jewellery. Before you enter a shop, ask yourself ‘What do I want?’ and think about the themes and inspirations you like in jewellery. But also prepare to be open minded and explore various styles of jewellery - you might fall in love with something very different "
      },
      {
        title: "2 What is the precious metal?",
        content: "If you are browsing in a jewellery boutique and see a design you like, begin by asking some questions about it. One of the first should be ‘What is it made from?’, to gauge whether the piece is gold, platinum or another type of metal. In Europe, 18ct yellow, white and rose gold is often used to make fine jewellery and platinum is chosen for bridal or diamond jewellery as it’s very hardwearing."
      },
      {
        title: "3 What are the gemstones or diamonds?",
        content: "If the piece you are looking at contains gemstones or diamonds, find out what they are. If they are blue stones they could be sapphire, topaz, aquamarine or even iolite; pink stones could be tourmaline, sapphire or kunzite. There are many types of gemstones, and they will each change the value and wearability of the piece. Diamonds also come in many variations, and a good jewellery shop will explain the quality and grade of the diamonds you are looking at, and can show you a chart to outline how diamonds are graded."
      },
      {
        title: "4 What is a torc when it comes to jewelry?",
        content: "A torc is a solid necklace that was made for wearing permanently or semi-permanently. It was often made of entwined wires of iron, gold, or silver"
      },
    {
        title: "5 What is the biggest difference between a bracelet and an arm ring?",
        content: "A bracelet is worn on the wrist, while an arm ring is worn around the bicep on the upper arm. Historically, this piece of jewelry was usually worn by men, but has become popular with women in the past couple of decades. They can be made from almost any metal, but were usually made from silver or gold and often embedded with jewel"


    }]
  }
  



const FAQ = () => {
    return (

        <>

<div className='faq'>
    <div className='innerFaq'>
    <Faq data={data}/>

    </div>
        
        </div>
            

        </>

    )
}


export default FAQ;