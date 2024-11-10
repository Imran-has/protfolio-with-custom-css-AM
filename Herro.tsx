import Image from"next/image"
// import pexelsImage from"../public/pexelsimage.jpg";
// import pexelswebsite from"../public/images/pexelswebsite.jpg";
// import pexelsso from"../public/images/ipexelsso.jpg";
// import pexelsgraphics from"../public/images/pexelsgraphics.jpg";
const Hero = () => {
    return (
  
  <div>
        <section className="secion">
          <h1 className="h1"> Welcome to my Portfolio</h1><br/>
          <p className="p"> I want to show you my recent work project !</p>
          {/* <div className="flex items-center justify-center h-screen">
          <Image src={pexelsImage} alt="setching Image" width={800} height={700} className="flex-col-3"></Image>
         
          </div> */}
         

        </section>
        <div>

<h1 className="heading"> About me</h1>
<p className="para"> Hello my name is imran hassan a front-end developer passionate about creating dyanmic and user friendly website<br/>
using next React Next jsa nd  tailwind css also working  as a warehouse assistan department of record management  <br/>logistics company almost 4 yaear experience  knowing indexing scanning inventory management   </p>
</div>
        <div>
          <h1 className="heading2 ">Skills</h1>
          <ul className="ul1">
            <li>Webiste developer</li><br/>
            <li>Graphics Designing</li><br/>
            <li>SEO</li><br/>
            <li>Wordpress website developer</li><br/>
            <li>Data entery expert</li><br/>
            <li >Freelancer</li><br/>
          </ul>
        </div>
        <div >
        <h1  className="heading3"> E<span className="text-rose-600">X</span>perience</h1>
          <h1  className="heading4  "> wordpress Webiste</h1>
          <p className="para1"> created  my own wordpress website almost working 3 year experience </p>
          <h2  className="heading5 ">Graphics Designing</h2>
          <p  className="para3 ">  I have experience  in Graphic Designing 3 yaear experience expert in adobe photoshop </p>
        </div>
        
        
        <div className="dev1">
        
        <Image src="/images/pexelswebsite.jpg" alt="website developer" width={800} height={700} className="flex-col-3"></Image>
        {/* <h1 className="heading6">Website Developer</h1> */}

        </div>
        
        
        <div className="dev2">

        
        <div>
        <Image src="/images/pexelsso.jpg" alt="seo image" width={800} height={700} className="flex-col-3"></Image>

        
        <h1 className="heading7"> Search engin optimization</h1>
        
        </div>
  
         
        
        </div>

        <div className="dev3">

        
        <div className="dev4">
        `<Image src="/images/pexelsgraphics.jpg" alt="Graphics desining" width={500} height={400} className="flex-col-3"></Image>

        
        <h1 className="heading8"> Graphics Designing</h1>
        
        </div>
  
         
        
        </div>


       
        </div>
        
    )
  }
  
  export default Hero
  