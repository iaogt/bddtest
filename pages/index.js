
import Layout from './layout';
import Video from '../components/Video';
import Featured from '../components/Featured';
import Mylist from '../components/Mylist';
import mockShows from '../mocks/exampledata';

const Index = props => (
    <Layout>
        <Video></Video>
        <Featured shows={props.shows}></Featured>
        <Mylist></Mylist>
    </Layout>
    
  );


Index.getInitialProps = async function(){
  
    return {
      shows: mockShows
    };
};
  
  export default Index;