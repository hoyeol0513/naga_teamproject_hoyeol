import Navbar from "../component/Navbar";
import styles from "../css/Navbar.module.css";
import SubNavbar from "../component/subNavbar";
import $, { nodeName } from "jquery";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import logoImg from "../imgs/logo.png";
function Over() {
  $(document).ready(function () {
    var Navbar = $("#Navbar");
    Navbar.css({
      display:"none", 
    })
    var testOffset = $("#Navbar").offset();
    console.log(testOffset.top);
    $("#windows").scroll(function () {  
      console.log($('#windows').scrollTop());
      if ($('#windows').scrollTop() >= testOffset.top) {
        Navbar.css({
          backgroundColor:"white",
          display:"block",
          position: "sticky",
          top:0,
          width: "100%",
        });
      }
      if ($('#windows').scrollTop() <= 169) {
        Navbar.css({
          display:"none",
        })
      }
    });
  });
  return (
    <>
    <div id="windows" className={styles.test}>
      <div>
        <header>
          <div  className={styles.navbar_bg}>
            <div className={styles.navbar}>
              <img src={logoImg} className={styles.logo} border="0" />
              <input
                className={styles.inputbar}
                placeholder="Simple is best of best"
              />
              <button className={styles.buttonBar}>
                <span>🍳</span>
              </button>
            </div>
            <div className={styles.navbar_list}>
              <Link to="/">처음으로</Link>
            </div>
          </div>
        </header>
      </div>
      <div id="Navbar">
        <SubNavbar />
        </div>
        <div id="testBox" className={styles.testBox}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis,
          pariatur culpa cum consectetur vel iure laudantium alias, nesciunt non
          repellendus odit atque corporis! Maiores similique mollitia vero
          consequuntur eos explicabo. Sapiente facere delectus, accusamus sunt
          explicabo atque distinctio quam cum reprehenderit vel, architecto
          natus recusandae nam enim vitae quae obcaecati? Officia exercitationem
          quasi architecto ullam. Veritatis, tempora voluptatem! Ab, sapiente.
          Excepturi reiciendis, vero cum ad inventore ut obcaecati neque quos
          architecto eveniet exercitationem maxime quod minima similique rerum
          perferendis quaerat? Dicta nam tempore porro libero debitis et
          corporis neque qui. Cumque, eos! Minus impedit, unde qui eum, deleniti
          tempora architecto deserunt possimus consequatur delectus veniam ut
          reiciendis sequi ratione. Commodi dolores perspiciatis dolor, autem
          cupiditate unde necessitatibus magnam quis labore. Quis minima
          necessitatibus, eius consequatur veritatis eos quos dolore dolores
          nesciunt vitae soluta vero dolor ipsum quod magnam deleniti molestiae.
          Itaque doloremque nulla assumenda quam beatae incidunt modi corporis
          voluptas? Ea et tempora harum non aperiam, ipsum consequatur similique
          facilis earum consectetur pariatur aliquid. Repellendus, quidem saepe!
          Tenetur, alias consequuntur minus praesentium tempore fugit illo
          reprehenderit? Neque atque eveniet tenetur. Nobis, veritatis qui
          voluptates saepe tempore eveniet eum nemo, vel ad magnam velit quasi
          ex sapiente repellat deleniti pariatur ab iste vitae quisquam, ratione
          nihil dolor. Voluptas neque excepturi mollitia? Natus esse, veniam
          cupiditate sunt voluptates mollitia fugiat, dignissimos amet sequi
          odio cum quisquam ullam repudiandae perspiciatis. Reprehenderit a ex
          voluptatum eius dolorem itaque expedita, assumenda culpa! Quidem,
          accusamus illo. Voluptatibus dignissimos eaque nesciunt architecto
          sapiente aliquam eos quibusdam! Magni eveniet dolore blanditiis! Rerum
          officiis soluta excepturi dicta omnis ea, eius porro atque, dolorum
          veniam eligendi quas voluptate a. Adipisci! Quis ullam, rem molestiae
          eveniet sunt nesciunt. Nulla in blanditiis odio illum officiis quidem
          soluta praesentium vitae, officia recusandae. Iure nulla numquam
          fugiat error veritatis. Fugit tempora iure ex debitis. Veritatis
          exercitationem nostrum, dolores consectetur ea inventore consequatur
          delectus laborum ipsa iure quae maxime sapiente officiis, aliquid
          atque iusto? Ducimus delectus, eaque dolore sint quisquam amet
          officiis voluptatem debitis ipsa. Ducimus itaque dolore temporibus,
          excepturi quod veritatis voluptatem atque totam provident similique
          nobis quam maxime voluptates error dignissimos hic sint laborum quasi
          laboriosam repellendus mollitia. Eum pariatur debitis minima tenetur.
          Aliquid aperiam porro delectus sequi pariatur ex eveniet consequuntur
          tempore, explicabo blanditiis fugit qui laborum alias temporibus
          adipisci quas exercitationem earum nostrum a. Tempore inventore nobis
          accusamus blanditiis quo ab. Dicta omnis dolores aut optio, voluptatem
          et quasi rerum ab quis provident assumenda voluptatibus beatae culpa
          aliquam nulla minima quae, porro maxime placeat quaerat sapiente odio
          sit pariatur cum! Dolor. Distinctio repellat soluta quasi at sunt. Nam
          accusamus culpa, voluptatibus facilis cumque ipsam excepturi provident
          odit deserunt molestias! Soluta adipisci eligendi quo nobis accusamus
          ducimus, cupiditate tempora beatae fugit minima? Aut accusamus tenetur
          quam neque, laudantium ex voluptates reiciendis quia voluptate aliquid
          dolores eaque harum voluptatibus. Vero eius laboriosam possimus
          repellendus eveniet quo velit, impedit eum numquam dicta libero
          ducimus! Totam, libero, at molestias facere, id veritatis error eaque
          odio necessitatibus voluptatem quae repellat doloribus cumque. Fuga
          vitae blanditiis ipsa omnis nam repellat, odio voluptatum, mollitia
          temporibus reprehenderit rem? Facere! Quod nostrum reiciendis nobis
          iusto aliquam id facilis ipsum repellat excepturi vitae quo neque
          placeat, dicta eius ab blanditiis commodi eaque temporibus odio
          quaerat necessitatibus distinctio quis obcaecati ex. Velit. Dolores
          reiciendis itaque delectus quia perspiciatis nisi vitae esse fugiat
          mollitia deleniti? At rerum aut nemo, maxime deleniti non laborum
          fugit eos corporis molestiae consectetur a impedit. Id, vitae nostrum.
          Quaerat, ducimus fugit. Aut maiores delectus nihil id repellendus
          consequatur fuga voluptatum doloremque! Cupiditate voluptates soluta
          expedita, optio numquam ad adipisci veniam dicta illo minus cum
          incidunt illum temporibus! Animi. Optio neque quos in dolor similique
          eius sapiente consequuntur qui, perspiciatis tempore reprehenderit et
          provident, officia odit iure, nesciunt quasi doloribus! Alias
          voluptas, totam repudiandae quod sapiente praesentium velit ex.
          Cupiditate ea optio ratione non maxime facere tempora, vitae iusto
          beatae, minima vel alias porro voluptas iste dolorem provident
          dolores! Doloribus earum, asperiores dolorum eligendi assumenda
          dolores qui magni est. Earum consequuntur quasi ex similique aperiam
          eius minus? Unde quam, ex architecto quae ipsam doloremque velit? Aut
          placeat ratione, consequuntur aliquid deserunt magnam officia
          repellendus. Id excepturi expedita minima reprehenderit! Ipsam
          quisquam odio dicta soluta. Et maiores commodi ipsum a aliquid labore
          corrupti non, sed laborum eveniet odio sunt nisi corporis cum eaque
          voluptatibus accusamus facilis incidunt at animi illo? Illo beatae id,
          officia quia, laborum asperiores temporibus quos veritatis vero dolore
          possimus explicabo alias corporis aperiam facilis optio ullam iste
          quidem ut! Quas tempore porro eligendi esse fuga tenetur? Velit iusto
          veniam eveniet, accusamus alias ipsum sed ducimus aspernatur
          reprehenderit aliquid itaque nobis minus sit illo cumque cupiditate
          quas fuga, dolorum esse deleniti saepe? Distinctio facere molestias
          ipsa? Corporis. Dicta nostrum minima a repellendus quaerat molestias
          quis modi omnis, porro culpa qui itaque labore animi voluptas beatae
          eos? Ratione quo quaerat quibusdam. Pariatur consequuntur eos rem id!
          Totam, magnam. Assumenda saepe perferendis fugit nostrum, enim, ab ad
          vel pariatur incidunt rerum et alias vero fugiat. Odio ab sunt et
          incidunt maxime deleniti eveniet. Doloremque labore dignissimos minima
          minus rem? Error repellendus accusantium quibusdam consequatur, eius
          totam, mollitia unde rem iusto rerum eum explicabo quam molestiae
          modi, libero provident fuga nostrum perferendis ipsa obcaecati
          doloribus ea consectetur. Impedit, quae libero. Repudiandae ut, illo
          autem nobis expedita eos natus unde non, omnis explicabo qui
          recusandae quod possimus porro, earum dolores! Amet consequatur quod
          soluta iure animi culpa perferendis cupiditate delectus enim! Eius,
          qui cumque. Quam vel corrupti eaque, officiis quo veritatis? Labore
          quibusdam aut vitae temporibus repudiandae asperiores, dolorum,
          repellat doloremque debitis quia non veniam nisi sapiente itaque
          mollitia, blanditiis est. Quos recusandae commodi repellendus incidunt
          aliquam possimus, fugiat accusamus accusantium, porro quo odit aperiam
          odio ab nihil impedit nisi quasi? Ullam maiores rem ad tempora
          pariatur quas quis hic doloribus? Repudiandae ut nesciunt pariatur
          odit modi doloribus odio architecto veritatis. Fuga harum eum quos
          similique soluta nostrum provident, quam eius aut vitae placeat quia
          error animi esse eaque, laboriosam culpa! Odio quam accusantium
          distinctio maxime velit aut inventore facere consequatur ut, quidem
          ipsa labore minus omnis illo facilis, ullam, odit laudantium similique
          magni libero tempora neque! Quas ullam facere molestiae? Reiciendis
          vel quis, earum itaque vero quisquam inventore molestiae at tempore
          vitae placeat perferendis temporibus dolorum? Veniam iste et delectus
          necessitatibus veritatis aliquid corrupti, mollitia repudiandae natus
          voluptates. Vel, dignissimos! Harum mollitia quod saepe modi nihil
          voluptatum quo, fuga earum libero illo accusantium aspernatur
          doloribus necessitatibus est nulla? Molestias nisi, officiis ad sit
          asperiores itaque est odio expedita atque dolorem? Doloribus quos
          asperiores voluptates vel quo, omnis nesciunt provident et illum nemo
          totam harum tenetur, quaerat deleniti exercitationem iusto. Quia
          corporis nobis magni amet perspiciatis veniam voluptate necessitatibus
          pariatur vero. Commodi fugit, ex repellendus est dolorem laudantium
          sed eveniet tempore dolor pariatur necessitatibus quasi assumenda
          optio fuga quibusdam error officiis magni quaerat corrupti blanditiis
          dolores aut, temporibus doloremque vitae. Rerum. Eum mollitia porro
          omnis harum labore maiores explicabo quas corporis numquam quam, error
          dolores officiis aliquam a? Itaque, quod tempora nobis consequuntur
          illum eius maxime ex quia harum earum? Cumque! Cumque porro voluptatem
          odio esse saepe totam nostrum ipsam optio mollitia dicta rem ad sint
          beatae velit suscipit minima nihil praesentium incidunt, voluptate id,
          similique necessitatibus dolore inventore. Doloribus, corrupti.
          Repellendus debitis, laudantium optio illo in magnam nisi vero ad,
          voluptatem eum veniam officiis cumque eaque? In similique expedita
          quia dolorum quisquam cum fuga libero doloremque, repellendus repellat
          natus soluta! Dignissimos consequuntur reiciendis voluptatibus, vero
          quis provident earum blanditiis quia illum, aspernatur quaerat, fugiat
          facere sint exercitationem. Maiores facilis quidem cum, vitae itaque
          esse consectetur eveniet alias laboriosam, non omnis! Deserunt
          blanditiis rerum aliquid similique cumque nemo laudantium ratione, ut
          sint doloremque officia placeat sequi labore consectetur illo!
          Obcaecati architecto praesentium rem. Non quo ea provident quis!
          Adipisci, ad eligendi. Veniam harum labore, cum, error ut blanditiis
          quidem officia delectus rerum culpa distinctio ipsa iure! Nobis id hic
          obcaecati sunt ullam sit deserunt, vel dolore eos quisquam sint,
          repudiandae ipsum. Ducimus, eius. Rerum repudiandae quae et sunt,
          eaque, deserunt minima magnam neque itaque eveniet, culpa expedita
          fugiat? Assumenda, expedita rem. Unde, at molestias quis dignissimos
          quisquam illo illum corrupti quos! Sed consequuntur at odit alias
          temporibus quam ab ex fugit architecto placeat vero a laborum maxime,
          sequi dolores natus! Commodi blanditiis dolore natus nemo facere
          voluptatem perspiciatis obcaecati unde modi? Quia beatae, doloremque
          iusto ipsa illo illum similique nemo, accusantium distinctio fugiat a
          enim atque, quos harum et voluptas consequatur minima ut. Quidem,
          beatae asperiores sapiente tempore incidunt a corporis? Repellendus,
          atque quidem officiis doloribus unde ab repudiandae qui consequatur.
          Molestiae repellat error est maiores, repudiandae non fuga modi sint,
          eius deserunt corporis laudantium fugiat dicta, nam eligendi
          cupiditate earum.
        </div>
      </div>
    </>
  );
}

export default Over;