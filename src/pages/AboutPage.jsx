import classes from "./About.module.css";

export default function About() {
  return (
    <section className={classes.about}>
      <div className={classes.container}>
        <div className={classes.infoContainer}>
          <div className={classes.decorBorder}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={classes.info}>
            <h1>About</h1>

            <article className={classes.content}>
              <p>
                Welcome to **Full Stack Factory**, a journey through software
                engineering where we break down complex systems into their
                smallest, most digestible parts. This blog isn't just about
                learning how to build apps—it's about learning **how everything
                fits together** in a real, functioning system. Whether you're a
                beginner or an aspiring full-stack developer, my goal is to
                **make the abstract tangible** and to take you step-by-step
                through the process of becoming a well-rounded software
                engineer.
              </p>

              <div className={classes.divider}>
                <span className={classes.gearIcon}></span>
              </div>

              <div className={classes.twoColumn}>
                <p>
                  The philosophy behind this blog is simple: **master the small
                  things**, so you can build big, complex systems. Instead of
                  memorizing endless concepts in isolation, we focus on
                  **applying them to real projects**. In every post, I break
                  down key software development concepts, from React to C/C++
                  data structures, backend technologies like Node and MongoDB,
                  and even delve into Golang and advanced computer science
                  topics. The goal is to **turn theory into practice**, by
                  demonstrating exactly how these technologies interact in
                  real-world projects.
                </p>
                <p>
                  This blog will follow my personal journey of **learning,
                  experimenting, and building**. As I move through my upper
                  division Computer Science courses, I’ll be creating content
                  based on those lectures, breaking down complex ideas and
                  showing how they connect with the practical world. By teaching
                  these concepts in my own words, I solidify my understanding
                  and provide valuable resources for anyone wanting to follow
                  along.
                </p>
              </div>

              <div className={classes.quote}>
                <div className={classes.quoteInner}>
                  "Learning software engineering is like building a car. Master
                  the parts, and you can build any car you want."
                </div>
              </div>

              <p>
                Just like a car factory, we need to understand every little
                system and component that goes into building an app. From the
                **steering mechanism** (how we manage state) to the **engine**
                (how backend logic operates), each part is vital. With **small,
                incremental learning**, I’m constructing a factory where every
                piece of knowledge—whether it’s React hooks or complex
                algorithms—can be assembled into a fully functioning app. Each
                blog post will add a new layer to this factory, helping you
                develop a **robust set of tools** to build real, efficient,
                scalable applications.
              </p>

              <p>
                Why does this matter? In today’s tech world, the demand for
                software engineers who can **solve real problems** and **build
                working systems** is higher than ever. But most resources focus
                only on **theory or isolated concepts** without showing how
                these things **actually fit together**. This is where Full Stack
                Factory comes in. It's not about learning isolated
                techniques—it's about understanding how to **construct complete
                systems**, so you can go from zero to full-stack developer with
                a complete understanding of how everything works.
              </p>

              <div className={classes.quote}>
                <div className={classes.quoteInner}>
                  "Knowledge is power, but **contextualized knowledge** is what
                  truly transforms you into a master."
                </div>
              </div>

              <p>
                This blog is a place for me to document my learning process as I
                navigate through **React, backend development, data
                structures**, and **advanced CS concepts**. But it’s not just
                for me—it's for anyone who wants to go beyond tutorials, to
                **connect the dots** between abstract concepts and real-world
                application. Whether it’s **building dynamic front-end UIs**
                with React, structuring **efficient server-side logic** with
                Node and MongoDB, or mastering **algorithms in C/C++**, we’ll
                explore the nitty-gritty details together and build something
                real.
              </p>

              <p>
                Here’s the plan: Each blog post is designed to be a **learning
                step**, taking you through a practical implementation of a key
                concept. Whether you’re following along as a beginner or coming
                back to reinforce your knowledge, you'll have clear, actionable
                steps and code examples to help you. After covering each topic,
                I’ll revisit those lessons and apply them to more complex
                projects, showing how **every piece** fits into the larger
                picture.
              </p>

              <p>
                So, come with me on this journey to **build the best, most
                practical software engineering skills** you can. It’s not about
                memorizing endless facts—it’s about understanding how to **apply
                knowledge in real, tangible ways**. By the end of this journey,
                you’ll have a strong foundation, ready to build full-fledged
                applications, and the ability to **think through and solve
                real-world problems**.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
