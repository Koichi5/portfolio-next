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
"use client";
import React, { useState } from "react";
import {
  AboutMyHistory,
  AboutProfile,
  ContactEmailAndPhone,
  ContactOthers,
  SkillFrameworkProficiency,
  SkillLanguageProficiency,
  SkillOtherProficiency,
  Work,
} from "@prisma/client";

function Home() {
  const [aboutProfiles, setAboutProfiles] = useState<AboutProfile[]>([]);
  const [aboutMyHistories, setAboutMyHistories] = useState<AboutMyHistory[]>(
    []
  );
  const [skillLanguageProficiencies, setSkillLanguageProficiencies] = useState<
    SkillLanguageProficiency[]
  >([]);
  const [skillFrameworkProficiencies, setSkillFrameworkProficiencies] =
    useState<SkillFrameworkProficiency[]>([]);
  const [skillOtherProficiencies, setSkillOtherProficiencies] = useState<
    SkillOtherProficiency[]
  >([]);
  const [contactEmailAndPhone, setContactEmailAndPhone] = useState<
    ContactEmailAndPhone[]
  >([]);
  const [contactOthers, setContactOthers] = useState<ContactOthers[]>([]);
  const [works, setWorks] = useState<Work[]>([]);

  const [loading, setLoading] = useState(false);

  // about profiles
  const fetchAboutProfiles = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/aboutProfiles");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setAboutProfiles(data);
    } catch (error) {
      console.error("Failed to fetch about profiles:", error);
    } finally {
      setLoading(false);
    }
  };

  // about my histories
  const fetchAboutMyHistories = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/aboutMyHistories");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setAboutMyHistories(data);
    } catch (error) {
      console.error("Failed to fetch about my histories:", error);
    } finally {
      setLoading(false);
    }
  };

  // skill language proficiencies
  const fetchSkillLanguageProficiencies = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/skillLanguageProficiencies");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setSkillLanguageProficiencies(data);
    } catch (error) {
      console.error(
        "Failed to fetch about skill language proficiencies:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  // skill framework proficiencies
  const fetchSkillFrameworkProficiencies = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/skillFrameworkProficiencies");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setSkillFrameworkProficiencies(data);
    } catch (error) {
      console.error(
        "Failed to fetch about skill framework proficiencies:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  // skill other proficiencies
  const fetchSkillOtherProficiencies = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/skillOtherProficiencies");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setSkillOtherProficiencies(data);
    } catch (error) {
      console.error("Failed to fetch about skill other proficiencies:", error);
    } finally {
      setLoading(false);
    }
  };

  // work
  const fetchWorks = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/myWorks");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setWorks(data);
    } catch (error) {
      console.error("Failed to fetch work:", error);
    } finally {
      setLoading(false);
    }
  };

  // contact email and phone
  const fetchContactEmailAndPhone = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/contactEmailAndPhone");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setContactEmailAndPhone(data);
    } catch (error) {
      console.error("Failed to fetch contact email and phone:", error);
    } finally {
      setLoading(false);
    }
  };

  // contact others
  const fetchContactOthers = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/contactOthers");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setContactOthers(data);
    } catch (error) {
      console.error("Failed to fetch contact others:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* about profiles */}
      <button onClick={fetchAboutProfiles} disabled={loading}>
        {loading ? "Loading..." : "Get About Profiles"}
      </button>
      <div>
        {aboutProfiles.map((profile) => (
          <div key={profile.id}>
            <p>{profile.name}</p>
          </div>
        ))}
      </div>

      {/* about my histories */}
      <button onClick={fetchAboutMyHistories} disabled={loading}>
        {loading ? "Loading..." : "Get About My Histories"}
      </button>
      <div>
        {aboutMyHistories.map((history) => (
          <div key={history.id}>
            <p>{history.date}</p>
          </div>
        ))}
      </div>

      {/* skill languages proficiencies */}
      <button onClick={fetchSkillLanguageProficiencies} disabled={loading}>
        {loading ? "Loading..." : "Get Skill Language Proficiencies"}
      </button>
      <div>
        {skillLanguageProficiencies.map((languageProficiency) => (
          <div key={languageProficiency.id}>
            <p>{languageProficiency.name}</p>
            <p>{languageProficiency.proficiency}</p>
          </div>
        ))}
      </div>

      {/* skill framework proficiencies */}
      <button onClick={fetchSkillFrameworkProficiencies} disabled={loading}>
        {loading ? "Loading..." : "Get Skill Framework Proficiencies"}
      </button>
      <div>
        {skillFrameworkProficiencies.map((frameworkProficiency) => (
          <div key={frameworkProficiency.id}>
            <p>{frameworkProficiency.name}</p>
            <p>{frameworkProficiency.proficiency}</p>
          </div>
        ))}
      </div>

      {/* skill other proficiencies */}
      <button onClick={fetchSkillOtherProficiencies} disabled={loading}>
        {loading ? "Loading..." : "Get Skill Other Proficiencies"}
      </button>
      <div>
        {skillOtherProficiencies.map((otherProficiency) => (
          <div key={otherProficiency.id}>
            <p>{otherProficiency.name}</p>
            <p>{otherProficiency.proficiency}</p>
          </div>
        ))}
      </div>

      {/* works */}
      <button onClick={fetchWorks} disabled={loading}>
        {loading ? "Loading..." : "Get Works"}
      </button>
      <div>
        {works.map((work) => (
          <div key={work.id}>
            <p>{work.title}</p>
            <p>{work.attribute}</p>
            <p>{work.detail}</p>
            <p>{work.point}</p>
            <p>{work.imagePath}</p>
            <p>{work.tech}</p>
          </div>
        ))}
      </div>

      {/* contact email and phone */}
      <button onClick={fetchContactEmailAndPhone} disabled={loading}>
        {loading ? "Loading..." : "Get Contact Email And Phone"}
      </button>
      <div>
        {contactEmailAndPhone.map((contact) => (
          <div key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.value}</p>
          </div>
        ))}
      </div>

      {/* contact others */}
      <button onClick={fetchContactOthers} disabled={loading}>
        {loading ? "Loading..." : "Get Contact Others"}
      </button>
      <div>
        {contactOthers.map((contact) => (
          <div key={contact.id}>{/* <p>{contact.name}</p> */}</div>
        ))}
      </div>
    </div>
  );
}

export default Home;
