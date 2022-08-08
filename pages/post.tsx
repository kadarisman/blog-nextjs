import Layout from "components/Layout";
interface postsProps {
  postsData: Array<any>;
}

export default function Post(props: postsProps) {
  const { postsData } = props;

  return (
    <div className='container mx-auto'>
      <Layout>
        <div className="flex flex-row gap-1 flex-wrap justify-around">
          {postsData.slice(0, 9).map((post) => (
            <div key={post.id} className="max-w-sm rounded overflow-hidden shadow-lg my-10">
              <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{post.title}</div>
                <p className="text-gray-700 text-base">
                  {post.body}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Read More..</button>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  )
}
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const postsData = await res.json();
  return {
    props: {
      postsData
    }
  }
}