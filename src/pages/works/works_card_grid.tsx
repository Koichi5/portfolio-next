import CardWithDialog from "@/components/card_with_dialog";
import ImageLink from "@/components/image_link";
import WorksCard from "@/components/works/works_card";
import Grid from "@mui/material/Grid";
import { Work } from "@prisma/client";
import { useEffect, useState } from "react";

const WorksCardGrid = () => {
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchWorks = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/works");
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

  useEffect(() => {
    fetchWorks();
  }, []);

  return (
    <Grid container spacing={2} sx={{ padding: "40px" }}>
      {works.map((work, index) => (
        <Grid key={index} item xs={12} sm={4}>
          <WorksCard
            id={work.id.toString()}
            title={work.title}
            detail={work.detail}
            point={work.point}
            attribute= {work.attribute}
            image_path={work.image_path}
            tech={work.tech ?? ""}
            source_urls={work.source_urls ?? []}
            source_image_urls={work.source_image_urls ?? []}
          />
          {/* <CardWithDialog
            imageSrc={work.image_path}
            title={work.title}
            attribute={work.attribute}
            firstContentTitle={"DETAIL"}
            firstContent={work.detail}
            secondContentTitle={"POINT"}
            secondContent={work.point}
            thirdContentTitle={work.tech != "" ? "TECH" : ""}
            thirdContent={work.tech ?? ""}
            fourthContentTitle={work.source_urls.length ? "SOURCE" : ""}
            fourthContent={
              <div
                key={index}
                style={{ alignItems: "center", display: "flex" }}
              >
                {work.source_urls.map((source, index) => (
                  <ImageLink
                    key={source.toString()}
                    link_target={source}
                    image_source={work.source_image_urls[index]}
                    image_altnative={"source"}
                    image_width={40}
                    image_height={40}
                  />
                ))}
              </div>
            }
          /> */}
        </Grid>
      ))}
    </Grid>
  );
};

export default WorksCardGrid;
