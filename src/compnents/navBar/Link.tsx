import AnchorLink from 'react-anchor-link-smooth-scroll'


type Props = {

  page: string
  selectedPage: string
  setSelectedPage: (value: string) => void
}

function Link({ page, selectedPage, setSelectedPage }: Props) {

  const tolowercasePage = page.toLowerCase().replace(/ /g, "");
  return (
    <AnchorLink
      className={`${selectedPage === tolowercasePage ? "text-[#ed9c9a]" : "" }  
    transition duration-200 hover:text-primary-300  `}
      href={`#${tolowercasePage}`}
      onClick={() => setSelectedPage(tolowercasePage)}
    >

      {page}
    </AnchorLink>
  )
}

export default Link