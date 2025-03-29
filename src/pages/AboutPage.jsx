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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus vel risus faucibus, sit amet sollicitudin lectus venenatis. Donec euismod, nisi vitae tincidunt convallis, eros magna facilisis magna, vel blandit tellus diam eget dolor. Nullam auctor, nisl vel gravida commodo, augue dui efficitur nisi, a finibus lacus eros at risus.
              </p>
              
              <div className={classes.divider}>
                <span className={classes.gearIcon}></span>
              </div>
              
              <div className={classes.twoColumn}>
                <p>
                  Praesent pharetra nisi vitae purus commodo, non finibus nulla molestie. Morbi euismod felis id magna ultrices, nec pellentesque metus ultrices. Suspendisse volutpat, enim eu sagittis cursus, odio metus aliquam erat, ac molestie ligula magna sed magna.
                </p>
                <p>
                  Aenean accumsan ipsum nec purus sodales, vel imperdiet nisi euismod. Curabitur vitae quam vel velit efficitur blandit non a magna. Duis quis cursus lorem, eu aliquam justo.
                </p>
              </div>
              
              <div className={classes.quote}>
                <div className={classes.quoteInner}>
                  "Manufacturing excellence through industrial heritage."
                </div>
              </div>
              
              <p>
                Fusce scelerisque enim eu arcu luctus tempor. Quisque et risus neque. Sed fringilla magna eget elit consequat, quis viverra risus rutrum. Etiam pharetra augue vitae nisl ultrices, eu convallis sapien convallis. Donec faucibus nulla non tellus facilisis convallis. Integer malesuada fermentum dignissim. Morbi magna dui, pretium nec faucibus sed, dapibus eget mauris.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}