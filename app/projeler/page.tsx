import ProjectsHeader from "@/components/projects/projects-header"
import HorizontalGallery from "@/components/projects/horizontal-gallery"
import ProjectsIndex from "@/components/projects/projects-index"
import ProjectsCta from "@/components/projects/projects-cta"

export const metadata = {
  title: "Projeler | imediaff Türkiye",
  description:
    "Moda, güzellik, otomotiv ve teknoloji sektörlerindeki seçkin Türkiye kampanyaları.",
}

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHeader />
      <HorizontalGallery />
      <ProjectsIndex />
      <ProjectsCta />
    </>
  )
}
