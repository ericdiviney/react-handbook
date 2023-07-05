export function FrameworkComparisonTable() {
	return (
    <div className="max-w-screen-xl pr-2 mx-auto overflow-x-auto">
      <div className="min-w-[600px]">
        <div className="flex justify-between p-6 my-2">
          <div className="basis-1/4"></div>
          <div className="flex basis-3/4">
            <div className="w-1/3 px-2">
              <div className="flex items-center gap-4">
                <svg
                  className="w-[48px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 28 28"
                  focusable="false"
                >
                  <circle cx="14" cy="14" r="14" fill="#639" />
                  <path
                    fill="#fff"
                    d="M6.2 21.8C4.1 19.7 3 16.9 3 14.2L13.9 25c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9L3.3 11.6C4.4 6.7 8.8 3 14 3c3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3C19.7 6.5 17 5 14 5c-3.9 0-7.2 2.5-8.5 6L17 22.5c2.9-1 5.1-3.5 5.8-6.5H18v-2h7c0 5.2-3.7 9.6-8.6 10.7z"
                  />
                </svg>
                <span className="hidden text-sm font-bold tracking-widest uppercase lg:block">
                  Gatsby
                </span>
              </div>
            </div>
            <div className="w-1/3 px-2">
              <div className="flex items-center gap-4">
                <svg
                  className="next-mark_root__wLeec w-[48px]"
                  aria-label="Next.js logomark"
                  role="img"
                  viewBox="0 0 180 180"
                >
                  <mask
                    height="180"
                    id="mask0_408_134"
                    maskUnits="userSpaceOnUse"
                    style={{ maskType: 'alpha' }}
                    width="180"
                    x="0"
                    y="0"
                  >
                    <circle cx="90" cy="90" fill="black" r="90"></circle>
                  </mask>
                  <g mask="url(#mask0_408_134)">
                    <circle
                      cx="90"
                      cy="90"
                      data-circle="true"
                      fill="black"
                      r="90"
                    ></circle>
                    <path
                      d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                      fill="url(#paint0_linear_408_134)"
                    ></path>
                    <rect
                      fill="url(#paint1_linear_408_134)"
                      height="72"
                      width="12"
                      x="115"
                      y="54"
                    ></rect>
                  </g>
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="paint0_linear_408_134"
                      x1="109"
                      x2="144.5"
                      y1="116.5"
                      y2="160.5"
                    >
                      <stop stopColor="white"></stop>
                      <stop
                        offset="1"
                        stopColor="white"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="paint1_linear_408_134"
                      x1="121"
                      x2="120.799"
                      y1="54"
                      y2="106.875"
                    >
                      <stop stopColor="white"></stop>
                      <stop
                        offset="1"
                        stopColor="white"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <span className="hidden text-sm font-bold tracking-widest uppercase lg:block">
                  Next.js
                </span>
              </div>
            </div>
            <div className="w-1/3 px-2">
              <div className="flex items-center gap-4">
                <svg
                  className="w-[48px]"
                  viewBox="0 0 800 800"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="800" height="800" fill="#212121" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M587.947 527.768C592.201 582.418 592.201 608.036 592.201 636H465.756C465.756 629.909 465.865 624.337 465.975 618.687C466.317 601.123 466.674 582.807 463.828 545.819C460.067 491.667 436.748 479.634 393.871 479.634H355.883H195V381.109H399.889C454.049 381.109 481.13 364.633 481.13 321.011C481.13 282.654 454.049 259.41 399.889 259.41H195V163H422.456C545.069 163 606 220.912 606 313.42C606 382.613 563.123 427.739 505.201 435.26C554.096 445.037 582.681 472.865 587.947 527.768Z"
                    fill="white"
                  />
                  <path
                    d="M195 636V562.553H328.697C351.029 562.553 355.878 579.116 355.878 588.994V636H195Z"
                    fill="white"
                  />
                  <path
                    d="M194.5 636V636.5H195H355.878H356.378V636V588.994C356.378 583.988 355.152 577.26 351.063 571.77C346.955 566.255 340.004 562.053 328.697 562.053H195H194.5V562.553V636Z"
                    stroke="white"
                    strokeOpacity="0.8"
                  />
                </svg>
                <span className="hidden text-sm font-bold tracking-widest uppercase lg:block">
                  Remix
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between p-6 my-2 rounded-xl bg-slate-100 dark:bg-zinc-800">
          <div className="basis-1/4">The gist</div>
          <div className="flex w-3/4">
            <div className="w-1/3 px-2">Fast, non-dynamic sites</div>
            <div className="w-1/3 px-2">Enterprise React</div>
            <div className="w-1/3 px-2">Indie Products / SaaS Startups</div>
          </div>
        </div>
        <div className="flex justify-between p-6 my-2">
          <div className="basis-1/4">Good for:</div>
          <div className="flex w-3/4">
            <div className="w-1/3 px-2">
              Static websites, Content-driven websites, SEO-friendly websites,
              High-traffic sites w/ non-dynamic content (Blogs, Marketing,
              Portfolio, Documentation)
            </div>
            <div className="w-1/3 px-2">
              Static websites, SEO-friendly rendering, Fast dynamic apps/sites,
              SPAish Support (via export)
            </div>
            <div className="w-1/3 px-2">
              SEO-friendly rendering, Fast dynamic apps/sites, Deploying
              &quot;to the edge&quot;
            </div>
          </div>
        </div>
        <div className="flex justify-between p-6 my-2">
          <div className="basis-1/4">Not Good for:</div>
          <div className="flex w-3/4">
            <div className="w-1/3 px-2">
              Dynamically generated content like search results, user-generated
              feeds, admin dashboards
            </div>
            <div className="w-1/3 px-2">
              <div className="mb-4">
                If you have absolutely no requirement for server-side react now
                or ever
              </div>
              <div>
                If your team has opinionated stances on functionality like
                routing, data fetching, etc.
              </div>
            </div>
            <div className="w-1/3 px-2">
              <div className="mb-4">
                Medium-Large apps (think enterprise SPAs)
              </div>
              <div>Very complex apps with a lot of async logic</div>
            </div>
          </div>
        </div>
        <div className="flex justify-between p-6 my-2 rounded-xl bg-slate-100 dark:bg-zinc-800">
          <div className="basis-1/4">Learning Resources</div>
          <div className="flex w-3/4">
            <div className="w-1/3 px-2">
              <div className="mb-4">
                <a
                  href="https://www.gatsbyjs.com/docs/tutorial/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Gatsby Tutorial
                </a>
              </div>
              <div className="mb-4">
                <a
                  href="https://www.youtube.com/watch?v=b2H7fWhQcdE"
                  target="_blank"
                  rel="noreferrer"
                >
                  Getting Started With Gatsby
                </a>
              </div>
              <div>
                <a
                  href="https://egghead.io/courses/build-a-blog-with-react-and-markdown-using-gatsby"
                  target="_blank"
                  rel="noreferrer"
                >
                  Build a Blog with Markdown &amp; Gatsby
                </a>
              </div>
            </div>
            <div className="w-1/3 px-2">
              <div className="mb-4">
                <a
                  href="https://nextjs.org/learn/basics/create-nextjs-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Next.js Tutorial
                </a>
              </div>
              <div>
                <a
                  href="https://egghead.io/courses/introduction-to-next-js-9-9c01"
                  target="_blank"
                  rel="noreferrer"
                >
                  Introduction to Next.js by Xiaoru Li
                </a>
              </div>
            </div>
            <div className="w-1/3 px-2">
              <div className="mb-4">
                <a
                  href="https://remix.run/docs/en/v1/tutorials/jokes"
                  target="_blank"
                  rel="noreferrer"
                >
                  Remix Tutorial
                </a>
              </div>
              <div className="mb-4">
                <a
                  href="https://egghead.io/courses/up-and-running-with-remix-b82b6bb6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Up &amp; Running With Remix by Kent C. Dodds
                </a>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/watch?v=hsIWJpuxNj0"
                  target="_blank"
                  rel="noreferrer"
                >
                  Remix Tutorial with Kent C. Dodds
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between p-6 my-2 rounded-xl bg-emerald-50 dark:bg-transparent">
          <div className="basis-1/4">Pros:</div>
          <div className="flex w-3/4">
            <div className="w-1/3 px-2">
              The obvious solution for when you know you want SSG. Generates
              static HTML files at build time, which can be served efficiently
              by a CDN, ensuring fast load times and improved performance.
            </div>
            <div className="w-1/3 px-2">
              <div className="mb-4">
                Next.js is the more battle-tested library in production, so
                you&apos;re less likely to encounter bugs that you&apos;ll have
                to report to the framework authors.
              </div>
            </div>
            <div className="w-1/3 px-2">
              <div className="mb-4">
                Remix has a pretty mature solution for{' '}
                <a
                  href="https://remix.run/blog/lazy-loading-routes"
                  target="_blank"
                  rel="noreferrer"
                >
                  avoiding Network Waterfalls
                </a>
                .
              </div>
              <div className="mb-4">
                Remix will probably work better out-of-the-box for apps that
                require support in older browsers like Safari 8-9 or IE 9-11.
              </div>
              <div>
                Simple architecture. Conceptually, a shift back towards MPA
                (Multi Page App) architectures like RoR (Ruby), Laravel (PHP),
                etc.
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between p-6 my-2 rounded-xl bg-rose-50 dark:bg-transparent">
          <div className="basis-1/4">Cons:</div>
          <div className="flex w-3/4">
            <div className="w-1/3 px-2">
              Serving dynamic content in way that scales is a bit of a pain.
              Otherwise, you&apos;re mostly left with doing fetch() inside
              useEffect() and then rendering like you normally would in a simple
              SPA.
            </div>
            <div className="w-1/3 px-2">
              <div>
                Devs using Remix tend to rave about{' '}
                <a
                  href="https://remix.run/blog/lazy-loading-routes"
                  target="_blank"
                  rel="noreferrer"
                >
                  Nested Routes
                </a>
                , while devs using the new (beta){' '}
                <a
                  target="_blank"
                  href="https://beta.nextjs.org/docs/app-directory-roadmap"
                  rel="noreferrer"
                >
                  App Router
                </a>{' '}
                in Next.js report many bugs.
              </div>
            </div>
            <div className="w-1/3 px-2">
              As the new framework on the block, Remix has to compete with the
              incumbents (Gatsby and Next.js). <br/><br/>
              
              More: <a href="https://redd.one/blog/my-struggle-with-remix">My Struggle With Remix</a>
            </div>
          </div>
        </div>
        <div className="flex justify-between p-6 my-2">
          <div className="basis-1/4">Neutral Points To Be Aware Of</div>
          <div className="flex w-3/4">
            <div className="w-1/3 px-2">Mostly for SSG only.</div>
            <div className="w-1/3 px-2">
              Next.js <strong>strongly encourages</strong> a Node.js runtime to
              serve/run the app (not required if you do a static export). Gatsby
              and Remix do not.
            </div>
            <div className="w-1/3 px-2">
              <div className="mb-4">
                Remix generally encourages you to move a lot of typical
                client-side &quot;state&quot; to the edge/server, sometimes
                removing the need to manage a &quot;state&quot; in the frontend
                altogether.
              </div>
              <div className="mb-4">
                Remix generally encourages you to fetch data for your
                apps/components from the edge/server via &quot;loader
                functions&quot;.
              </div>
              <div className="mb-4">
                While the router / nested routes bring a big performance boost
                to your app, there&apos;s also a bit of a learning curve. This
                is a moot point if you&apos;re also considering the App Router
                in Next.js, as that also comes with a learning curve.
              </div>
              <div>
                Remix doesn&apos;t support SSG (which in a lot of cases is
                probably fine if your goals are simply to deliver a fast user
                experience).
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between p-6 my-2 rounded-xl bg-slate-100 dark:bg-zinc-800">
          <div className="basis-1/4">Commercially Backed By:</div>
          <div className="flex w-3/4">
            <div className="w-1/3 px-2">
              <a
                href="https://www.netlify.com/"
                target="_blank"
                rel="noreferrer"
              >
                Netlify
              </a>
            </div>
            <div className="w-1/3 px-2">
              <a href="https://vercel.com/" target="_blank" rel="noreferrer">
                Vercel
              </a>
            </div>
            <div className="w-1/3 px-2">
              <a
                href="https://www.shopify.com/"
                target="_blank"
                rel="noreferrer"
              >
                Shopify
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}