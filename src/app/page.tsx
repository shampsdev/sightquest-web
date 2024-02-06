'use client'

import { Layout } from "@/components/ui/layout";
import { SegmentControl } from "@/components/ui/segment-control";
import { AboutProject } from "@/modules/about-project/about-project";
import { HeroSection } from "@/modules/hero-section/hero-section";
import { MailSender } from "@/modules/mail-sender/mail-sender";
import { Realization } from "@/modules/realization/realization";

export default function Home() {
  return(
    <Layout className='pt-32 flex flex-col gap-y-16 bg-customSecondary '>
      <MailSender/>
      <HeroSection/>
      <AboutProject/>
      <Realization/>
    </Layout>    
  )
}
