'use client'

import { Layout } from "@/components/ui/layout";
import { SegmentControl } from "@/components/ui/segment-control";
import { HeroSection } from "@/modules/hero-section/hero-section";
import { MailSender } from "@/modules/mail-sender/mail-sender";
import Image from "next/image";

export default function Home() {
  return(
    <Layout className='flex flex-col gap-y-16 bg-customSecondary '>
      <MailSender/>
      <HeroSection/>
    </Layout>    
  )
}
