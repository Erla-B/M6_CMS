/**
 * @typedef {import("@prismicio/client").Content.HeroSliceSlice} HeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliceSlice>} HeroSliceProps
 * @param {HeroSliceProps}
 *
 */
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import RichText from '/./components/RichText';
// import CustomLink from '/./components/CustomLink';

const HeroSlice = ({ slice }) => (
  <section className='section'>
    <div className='img-container'>
    <div className="bg-color" ></div>
      <PrismicNextImage field={slice?.primary?.image} className="bg-img" />
    </div>
    <div className='text-container'>
      <RichText field={slice.primary.title} className='title' />
      <RichText field={slice.primary.description} className='description' />
    </div>
  </section>
)

export default HeroSlice
