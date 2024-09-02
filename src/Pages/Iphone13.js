import img1 from '../Images/iphone-13-Blue-Price-in-Srilanka-Apple-Asia-1.jpg'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

function Iphone13() {
    return ( 
        <section>
            <NavBar/>
            <div class="flex justify-center mt-24 ">
                <div class="bg-pink-50 w-[490px] h-[1100px] rounded-3xl shadow-xl shadow-pink-100" >
                    <p class="text-2xl font-bold text-center">Iphone 13 Specification</p>
                    <br/>
                    <img class="w-[160px] h-[200px] absolute ml-[150px] "  src={img1} alt=""/>
                    <br/>
                    <table class="table-fixed mt-[240px]" >
                
                        <tbody>
                            <tr class="border border-collapse border-gray-300">
                                <td class="font-bold ">Launch&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                <td class="font-bold">   Announced&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                <td>2021, September 14</td>
                            </tr>
                            <tr class="border border-collapse border-gray-300">
                                <td class="font-bold">Body</td>
                                <td class="font-bold">Dimensions</td>
                                <td>146.7 x 71.5 x 7.7 mm (5.78 x 2.81 x 0.30 in)</td>
                  
                            </tr>
                            <tr class="border border-collapse border-gray-300">
                                <td class="font-bold"> </td>
                                <td class="font-bold">Weight</td>
                                <td>174 g (6.14 oz)</td>
                   
                            </tr>
                            <tr class="border border-collapse border-gray-300">
                                <td class="font-bold">Display</td>
                                <td class="font-bold">Type</td>
                                <td>Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits (HBM), 1200 nits (peak)</td>
                            </tr>
                            <tr class="border border-collapse border-gray-300">
                                <td></td>
                                <td class="font-bold">Size</td>
                                <td >6.1 inches, 90.2 cm2 (~86.0% screen-to-body ratio)</td>
                            </tr>
                            <tr class="border border-collapse border-gray-300">
                                <td></td>
                                <td class="font-bold">Resolution</td>
                                <td>1170 x 2532 pixels, 19.5:9 ratio (~460 ppi density)</td>
                            </tr>

                            <tr class="border border-collapse border-gray-300">
                                <td class="font-bold">Memory</td>
                                <td class="font-bold">Internal</td>
                                <td>128GB 4GB RAM, 256GB 4GB RAM, 512GB 4GB RAM
                                    NVMe</td>
                            </tr>

                            <tr class="border border-collapse border-gray-300">
                                <td class="font-bold">Main Camera</td>
                                <td class="font-bold">Dual</td>
                                <td>12 MP, f/1.6, 26mm (wide), 1/1.9", 1.7µm, dual pixel PDAF, sensor-shift OIS
                                12 MP, f/2.4, 120˚, 13mm (ultrawide), 1/3.4", 1.0µm</td>
                            </tr>

                            <tr class="border border-collapse border-gray-300">
                                <td class="font-bold">Selfie camera</td>
                                <td class="font-bold">Single</td>
                                <td>12 MP, f/2.2, 23mm (wide), 1/3.6"
                                SL 3D, (depth/biometrics sensor)</td>
                            </tr>

                            <tr class="border border-collapse border-gray-300">
                                <td class="font-bold">Battery</td>
                                <td class="font-bold">Type</td>
                                <td>Li-Ion 3240 mAh, non-removable (12.41 Wh)</td>
                            </tr>
                        </tbody>
                    </table>
                    <br/>

                    <p class="text-3xl font-bold text-center">pricing</p>
                    <br/>
                    <table class="flex items-center justify-center ">
                        <tbody>
                            <tr class="border border-collapse border-gray-300">
                                <td class="font-bold">128GB 4GB RAM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                <td>$363.25</td>
                            </tr>
                            <tr class="border border-collapse border-gray-300">
                                <td class="font-bold">256GB 4GB RAM</td>
                                <td>$438.52</td>
                            </tr>
                            <tr class="border border-collapse border-gray-300">
                                <td class="font-bold">512GB 4GB RAM</td>
                                <td>$525.10</td>
                            </tr>
                        </tbody>
                    </table>
              
                </div>
       

            </div>
            <br/>
            <br></br>
            <Footer/>
        </section>
     );
}

export default Iphone13;