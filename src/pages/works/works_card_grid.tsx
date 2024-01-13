import CardWithDialog from "@/components/material_ui/card_with_dialog";
import ImageLink from "@/components/material_ui/image_link";
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
    <Grid container spacing={8}>
      {works.map((work, index) => (
        <Grid key={index} item xs={12} sm={6}>
          <CardWithDialog
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
                    link_target={source}
                    image_source={work.source_image_urls[index]}
                    image_altnative={"source"}
                    image_width={40}
                    image_height={40}
                  />
                ))}
              </div>
            }
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default WorksCardGrid;
