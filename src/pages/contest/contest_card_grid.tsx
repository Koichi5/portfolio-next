import CardWithDialog from "@/components/material_ui/card_with_dialog";
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
    <Grid container spacing={8}>
      {contests.map((contest, index) => (
        <Grid key={index} item xs={12} sm={6}>
          <CardWithDialog
            imageSrc={contest.image_path}
            title={contest.title}
            attribute={contest.attribute}
            firstContentTitle={"DETAIL"}
            firstContent={contest.detail}
            secondContentTitle={"POINT"}
            secondContent={contest.point}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ContestCardGrid;
