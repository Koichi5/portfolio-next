import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { styled, useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import Divider from "@mui/material/Divider";
import CustomTitle from "@/components/title";
import CustomSubTitle from "@/components/sub_title";
import ImageLink from "@/components/image_link";

const CustomContestsDetailBackButton = styled("button")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#252529" : "white",
  border:
    theme.palette.mode === "dark" ? "solid grey 0.5px" : "solid #DCDCDC 0.5px",
  boxShadow:
    theme.palette.mode === "dark"
      ? "0px 5px 5px grey[900]"
      : "0px 5px 5px grey[200]",
  borderRadius: "50px",
  width: "45px",
  height: "45px",
  cursor: "pointer",
  color: theme.palette.mode === "dark" ? "grey" : "#A1A1AA",
}));

const CustomContestsDetailDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "grey" : "#DCDCDC",
  borderLeftWidth: "1px",
  marginRight: "13px",
}));

const CustomContestsDetailAttribute = styled("div")(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "grey" : "#A1A1AA",
}));

const CustomContestsDetailImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "45%",
  borderRadius: "15px",
  objectFit: "cover",
}));

const CustomContestsDetailSectionTitle = styled("div")(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#A1A1AA" : "#252529",
  textAlign: "left",
  fontFamily: "serif",
  fontSize: 18,
  fontWeight: "bold",
  padding: "20px 0px",
}));

export default function ContestsDetail() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.palette.mode === "dark" ? "#18181B" : "white",
      }}
    >
      <div style={{ display: "flex", padding: "40px" }}>
        <div style={{ width: "20%" }}>
          <CustomContestsDetailBackButton
            onClick={() => {
              router.back();
            }}
          >
            <ArrowBackIcon fontSize="small" style={{ alignSelf: "center" }} />
          </CustomContestsDetailBackButton>
        </div>
        <div style={{ width: "60%" }}>
          <div style={{ display: "flex", padding: "10px 0px" }}>
            <CustomContestsDetailDivider orientation="vertical" flexItem />
            <CustomContestsDetailAttribute>
              {router.query.attribute}
            </CustomContestsDetailAttribute>
          </div>
          <CustomTitle
            text={
              Array.isArray(router.query.title)
                ? router.query.title[0]
                : router.query.title ?? ""
            }
          />
          <CustomSubTitle
            text={
              Array.isArray(router.query.detail)
                ? router.query.detail[0]
                : router.query.detail ?? ""
            }
          />
          <CustomContestsDetailImage
            src={
              Array.isArray(router.query.image_path)
                ? router.query.image_path[0]
                : router.query.image_path ?? ""
            }
          />
          <CustomContestsDetailSectionTitle>
            Point
          </CustomContestsDetailSectionTitle>
          <CustomSubTitle
            text={
              Array.isArray(router.query.point)
                ? router.query.point[0]
                : router.query.point ?? ""
            }
          />
          {router.query.tech != "" ? (
            <div>
              <CustomContestsDetailSectionTitle>
                Tech
              </CustomContestsDetailSectionTitle>
              <CustomSubTitle
                text={
                  Array.isArray(router.query.tech)
                    ? router.query.tech[0]
                    : router.query.tech ?? ""
                }
              />
            </div>
          ) : (
            <div></div>
          )}
          {Array.isArray(router.query.source_urls) ? (
            router.query.source_urls.length != 0 ? (
              <div>
                <CustomContestsDetailSectionTitle>
                  Source
                </CustomContestsDetailSectionTitle>
                <div style={{ display: "flex" }}>
                  {" "}
                  {router.query.source_urls.map((source, index) => (
                    <ImageLink
                      key={index}
                      link_target={source}
                      image_source={
                        Array.isArray(router.query.source_image_urls)
                          ? router.query.source_image_urls[index]
                          : ""
                      }
                      image_altnative={"contests image"}
                      image_width={40}
                      image_height={40}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div></div>
            )
          ) : (
            <div></div>
          )}
        </div>
        <div style={{ width: "20%" }}></div>
      </div>
    </div>
  );
}
