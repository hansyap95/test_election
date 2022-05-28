import {useEffect} from 'react'

const Gpt = ({path,size,id}) => {
    
  useEffect(() => {
    const googletag = window.googletag || {};

    googletag.cmd = googletag.cmd || [];
    googletag.cmd.push(() => {
      googletag.defineSlot(path, size, id).addService(googletag.pubads());
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
      googletag.display(id);
    });
  }, [path, size, id]);
};
   
export default Gpt