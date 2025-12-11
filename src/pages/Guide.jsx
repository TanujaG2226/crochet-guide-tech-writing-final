import "../App.css";
import hookPic from "../pictures/hook-anatomy.jpg";
import slip from "../pictures/single-crochet.png";
import single from "../pictures/Single-Crochet.jpg";
import hdc from "../pictures/hdc.png";
import double from "../pictures/double.png";

function Guide() {
  return (
    <section className="page-wrapper">
      <div className="section-block intro">
        <h1>Introduction</h1>
        <p>
          A few years ago, while I was scrolling on my phone, I stumbled upon a
          surprisingly list: The Heritage Crafts Red List. Similar to the
          International Union for Conservation of Nature’s Red List, which ranks
          plants and animals by their risk of extinction, this list does the
          same for traditional crafts. Right now, only five crafts in the UK
          have completely vanished, but the “critically endangered” and
          “endangered” sections are packed. These are crafts at “serious risk of
          no longer being practiced in the UK” (Heritage Crafts, n.d.). Even
          though this might not seem urgent in today’s world, the list stuck
          with me.
        </p>
        <br></br>
        <p>
          Crafting (of any sort) is one of the most meaningful parts of my life.
          Just like art and music spark creativity for others, crafting is how I
          express myself. It’s how I unwind after a long day and how I tap into
          a deeper appreciation for life. Art, music, and crafts connect us to
          our culture and our history, so watching any of them fade out hurts.
        </p>
        <br></br>
        <p>
          Crochet, though, is still very much alive. So, you might wonder why
          I’m bringing up a list about dying crafts when this one is thriving.
          The reason is simple: it’s my “why” for writing this. I want to give
          beginners the confidence and tools to dive into this amazing craft
          while feeding their curiosity for more. By introducing crocheting, I
          hope readers feel inspired to explore other crafts too, maybe even
          find new ways to connect with their culture and unwind. Hopefully, by
          the end of this article, you’ll feel empowered to start your crafting
          journey and enjoy the process of learning something new.
        </p>{" "}
      </div>
      <div className="section-block history">
        <h1>History</h1>
        <p>
          The exact origins of crocheting are tough to pin down because fibers
          naturally decay over time (Govil, 2024). One article notes that
          chain-stitch work showed up as early as the 1500s during the reign of
          Queen Elizabeth I (Karp, 2018). By the 1700s, Europe had adopted
          tambour embroidery, a chain-stitch technique that used a small hooked
          needle originally from China. Tambour work eventually led to the
          development of flat hooks and a method called shepherd’s knitting.
          This style appeared most often in Scotland, where crafters used flat
          hooks to create dense slip-stitch fabric.
        </p>
        <br></br>
        <p>
          The first confirmed use of the word <i>crochet</i> appeared in 1823 in
          the Dutch magazine <i>Penelope</i> , which published instructions for
          a “hooked purse” using stitches like the slip stitch and double
          crochet.
        </p>
        <br></br>
        <p>
          In 1840, Jane Gaugain released the first crochet instructions in
          English. Around the same time, crafters shifted from tambour needles
          to tapered ivory hooks and steel hooks, pushing the craft closer to
          what we now recognize as modern crochet (Karp, 2018).
        </p>
        <br></br>
        <p>
          With these changes stacking up, earlier forms of crochet blended into
          the modern version we know today. Over time, especially in recent
          years, the craft has continued to grow in popularity around the world.
        </p>
      </div>
      <div className="section-block general-info">
        <h1>General Crochet Information</h1>
        <h2>Hook Types</h2>
        <p>
          Unlike knitting, which uses two needles, crocheting works with a
          single hook made up of four main parts: the handle, the shaft, the
          throat, and the tip (Cyprianne, 2025).
        </p>
        <br></br>
        <p>
          The <strong> handle</strong> gives your fingers a place to rest and
          grip the hook. The <strong>shaft</strong> is where the yarn loops as
          you create stitches, and its diameter determines the hook size (for
          example, a 4.5 mm shaft means the hook is 4.5 mm). The{" "}
          <strong>throat</strong> connects the shaft and the tip, tapering in to
          catch the yarn and guide it smoothly through stitches. Without this
          part, moving the yarn through your work would be way harder. Finally,
          the <strong>tip</strong> is what you insert into each stitch as you
          crochet.
        </p>
        <figure className="figure">
          <img src={hookPic} alt="Crochet hook anatomy" />
          <figcaption>
            <strong>Figure 1:</strong> Hook Anatomy-
            <a
              href="https://www.prettydarnadorable.com/2020/02/27/beginners-guide-to-crochet-hooks/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          </figcaption>
        </figure>
        <br></br>
        <p>
          Hook size depends on the yarn you’re using and the look you want for
          your piece. For beginners, hooks between{" "}
          <strong>4.00 mm and 6.5 mm </strong>work best. They are not too small
          or too large and pair well with most standard yarns.
        </p>
        <br></br>
        <p>
          Hooks come in all kinds of materials, but metal, plastic, and acrylic
          are usually recommended for beginners. These glide more easily across
          the yarn and feel simpler to control as you learn (Cyprianne, 2025).
        </p>
        <h2>Yarn Types</h2>
        <p>
          There are many different types of yarn that crocheters use. Ranging
          from traditional cotton yarn to textured yarn to even things like
          metal wire, crochet is a craft that works for a variety of materials.{" "}
        </p>
        <br></br>
        <p>
          There are three main types that beginners are recommended to use:
          wool, cotton, and acrylic.{" "}
        </p>
        <br></br>
        <p>
          Wool yarn is very forgiving with mistakes and is easy to unravel and
          reuse. Cotton yarn is an inelastic fiber, making it harder to use than
          wool, but it’s good for garments as it is lighter than wool. Lastly,
          acrylic yarn is very popular for beginners as it is widely available,
          but it can be prone to splitting (when the ends are the yarn start
          fraying), making it difficult for beginners to use.{" "}
        </p>
        <br></br>
        <p>
          In addition to different materials, yarn bundles often have weights
          associated with them. The yarn weights reference the thickness of the
          yarn. The weight can influence the type of hook that is used as well
          as how the finished product will look. By changing the yarn weight and
          the hook size, crocheters can experiment with different styles and
          look for their final products. Beginners are often recommended to use
          yarn with a weight of 4 and the associated hook size as the size is
          not too bulky or too thin, making the stitches easier to see.
        </p>
        <br></br>
        <p>
          Lastly, a sometimes-overlooked characteristic of yarn is the color.
          When using a darker color of yarn, it can be quite challenging to see
          the stitches and where to insert the hook. For this reason, beginners
          are recommended to use lighter colored yarn with their first few
          projects. As the skill is practiced, it becomes easier to spot
          stitches in the darker yarn.
        </p>
        <h2>Basic Stitches</h2>
        <p>
          Crochet comes with tons of stitches, and once you get the hang of
          things, you can even combine or tweak them to create your own
          patterns. But before you jump into experimenting, it’s super important
          to build a strong foundation with the basics.
        </p>
        <h3>Slip Stitch</h3>
        <p>
          The slip stitch is one of the simplest and most common stitches,
          especially for finishing a piece. To make one, insert your hook into
          the next stitch, yarn over (wrap the yarn around the hook once), and
          pull the yarn through the stitch and the active loop (the loop that is
          on your hook before creating the stitch)on your hook in a single
          motion.
        </p>
        <figure className="figure">
          <img src={slip} alt="Slip Stitch" />
          <figcaption>
            <strong>Figure 2:</strong> How to do a Slip Stitch-
            <a
              href="https://smart.dhgate.com/mastering-the-slip-stitch-in-crochet-a-step-by-step-guide-for-smooth-professional-finishes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          </figcaption>
        </figure>

        <h3>Single Crochet</h3>
        <p>
          The single crochet is one of the stitches you’ll use constantly. Start
          by inserting your hook into the next stitch. At this point, the active
          loop and the new stitch sit on your hook. Yarn over and pull the yarn
          through the stitch. Now you should see two loops on the hook. Yarn
          over again and pull through both loops. That completes the stitch and
          leaves one active loop on your hook.
        </p>
        <figure className="figure">
          <img src={single} alt="Single Crochet" />
          <figcaption>
            <strong>Figure 3:</strong> How to do a Single Crochet-
            <a
              href="https://crochettoplay.com/how-to-single-crochet/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          </figcaption>
        </figure>
        <br></br>
        <p>
          This pattern of inserting and yarning over is what is used to create
          many of the other stitches in crocheting.{" "}
        </p>
        <h3>Half-Double Crochet</h3>
        <p>
          The half-double crochet starts with a small twist. Instead of
          inserting your hook right away, yarn over first. You should have two
          loops on the hook. Then insert your hook into the next stitch, yarn
          over again, and pull the yarn through. You’ll now have three loops on
          the hook. To finish, yarn over once more and pull the yarn through all
          three loops at once. This part can be a little tricky, so take your
          time and avoid tugging too hard. You can practice and undue the stitch
          as many times as you need to until it looks right.
        </p>
        <figure className="figure">
          <img src={hdc} alt="Half-Double Crochet" />
          <figcaption>
            <strong>Figure 4:</strong> How to do a Half-Double Crochet-
            <a
              href="https://mycrochetspace.com/half-double-crochet/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          </figcaption>
        </figure>

        <h3>Double Crochet</h3>
        <p>
          The double crochet begins the same way as the half-double. Yarn over,
          insert your hook into the next stitch, yarn over again, and pull
          through the stitch so you have three loops on the hook. Now, yarn over
          and pull through the first two loops. You’ll be left with two loops.
          Yarn over one last time and pull through those two loops to finish the
          stitch.
        </p>
        <figure className="figure">
          <img src={double} alt="Double Crochet" />
          <figcaption>
            <strong>Figure 5:</strong> How to do a Double Crochet-
            <a
              href="https://sarahmaker.com/double-crochet/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          </figcaption>
        </figure>

        <br></br>
        <p>
          By knowing these few basic stitches, you should be able to start (and
          finish) many different projects. As your skills with creating these
          stitches grow, the process will become easier, taking less time to do.
        </p>
      </div>
    </section>
  );
}

export default Guide;
