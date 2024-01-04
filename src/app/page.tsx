// import Image from "next/image";
// import styles from "./page.module.css";
// import { config } from "@/app/lib/config";
// import { useEffect, useState } from "react";
// import { AboutProfile } from "@prisma/client";

// export default async function Home() {
//   const [aboutProfiles, setAboutProfiles] = useState<AboutProfile[]>([])
//   useEffect(() => {
//     const getAboutProfiles = async () => {
//       const response = await fetch(`${config.apiPrefix + config.apiHost}/api/about_profile`)
//       const aboutProfiles = await response.json()
//       setAboutProfiles(aboutProfiles)
//     }
//     getAboutProfiles()
//   }, [])
//   // const url = config.apiPrefix + config.apiHost + "/api/about_profile";
//   // // APIへリクエスト
//   // const res = await fetch(url, {
//   //   cache: "no-store",
//   // });

//   // console.log(res)

//   return (
//     <main className={styles.main}>
//       <h1>profile</h1>
//       {aboutProfiles.map((aboutProfile) => (
//         <div>
//           <p>{aboutProfile.name}, {aboutProfile.value}</p>
//         </div>
//       ))}
//       {/* <div className={styles.description}>
//         <p>
//           Get started by editing&nbsp;
//           <code className={styles.code}>src/app/page.tsx</code>
//         </p>
//         <div>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className={styles.vercelLogo}
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className={styles.center}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className={styles.grid}>
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Docs <span>-&gt;</span>
//           </h2>
//           <p>Find in-depth information about Next.js features and API.</p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Learn <span>-&gt;</span>
//           </h2>
//           <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Templates <span>-&gt;</span>
//           </h2>
//           <p>Explore the Next.js 13 playground.</p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Deploy <span>-&gt;</span>
//           </h2>
//           <p>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div> */}
//     </main>
//   );
// }

// pages/page.tsx
'use client'
import { AboutProfile } from '@prisma/client';
import React, { useState } from 'react';
import { config } from './lib/config';

function Page() {
  const [aboutProfiles, setAboutProfiles] = useState<AboutProfile[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchAboutProfiles = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${config.apiPrefix + config.apiHost}/pages/api/about_profile`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAboutProfiles(data);
    } catch (error) {
      console.error('Failed to fetch about profiles:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchAboutProfiles} disabled={loading}>
        {loading ? 'Loading...' : 'Get About Profiles'}
      </button>
      <div>
        {aboutProfiles.map(profile => (
          <div key={profile.id}>
            {/* Render about profile data */}
            <p>{profile.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
