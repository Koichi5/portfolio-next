import CardWithDialog from "@/components/card_with_dialog";
import ImageLink from "@/components/image_link";
import WorksCard from "@/components/works/works_card";
import WorksSkeltonCard from "@/components/works/works_skelton_card";
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
    <div>
      {loading ? (
        <Grid container spacing={2}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Grid key={index} item xs={12} sm={4}>
              <WorksSkeltonCard />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={2} sx={{ padding: "40px" }}>
          {works.map((work, index) => (
            <Grid key={index} item xs={12} sm={4}>
              <WorksCard
                id={work.id.toString()}
                title={work.title}
                detail={work.detail}
                point={work.point}
                attribute={work.attribute}
                image_path={work.image_path}
                tech={work.tech ?? ""}
                source_urls={work.source_urls ?? []}
                source_image_urls={work.source_image_urls ?? []}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default WorksCardGrid;
