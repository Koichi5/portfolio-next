import CardWithDialog from "@/components/card_with_dialog";
import ContestsCard from "@/components/contests/contests_card";
import ContestsSkeltonCard from "@/components/contests/contests_skelton_card";
import { Grid } from "@mui/material";
import { Contest } from "@prisma/client";
import { useEffect, useState } from "react";

const ContestCardGrid = () => {
  const [contests, setContests] = useState<Contest[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchContests = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/contests");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setContests(data);
    } catch (error) {
      console.error("Failed to fetch work:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContests();
  }, []);

  return (
    <div>
      {loading ? (
        <Grid container spacing={2} sx={{ padding: "40px" }}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Grid key={index} item xs={12} sm={4}>
              <ContestsSkeltonCard />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={2} sx={{ padding: "40px" }}>
          {contests.map((contest, index) => (
            <Grid key={index} item xs={12} sm={4}>
              <ContestsCard
                id={contest.id.toString()}
                title={contest.title}
                detail={contest.detail}
                point={contest.point}
                attribute={contest.attribute}
                image_path={contest.image_path}
                tech={contest.tech ?? ""}
                source_urls={contest.source_urls ?? []}
                source_image_urls={contest.source_image_urls ?? []}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default ContestCardGrid;
