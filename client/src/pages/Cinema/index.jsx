import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "video-react/dist/video-react.css";
import { apiGetCollection } from "@/services/collectionService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Cinema = () => {
  const [collections, setCollections] = useState([]);
  const getCollection = async () => {
    const data = await apiGetCollection();
    if (data.success) setCollections(data.collections);
  };
  useEffect(() => {
    getCollection();
  }, []);

  return (
    <div className="w-full">
      <Tabs defaultValue="hot" className="w-full">
        <div className="w-full bg-profileColor p-4 flex flex-col">
          <h3 className="text-center text-xl text-white pb-4">
            Rạp Chiếu Phim
          </h3>
          <TabsList className="w-full flex gap-8">
            <TabsTrigger className="text-lg text-white" value="hot">
              Phim hot
            </TabsTrigger>
            <TabsTrigger className="text-lg text-white" value="vn">
              Việt Nam
            </TabsTrigger>
            <TabsTrigger className="text-lg text-white" value="jp">
              Nhật Bản
            </TabsTrigger>
            <TabsTrigger className="text-lg text-white" value="hk">
              Hong Kong
            </TabsTrigger>
            <TabsTrigger className="text-lg text-white" value="gay">
              Gay
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="hot">
          <div className="grid grid-cols-2 pl-6">
            {collections?.map((collection) => (
              <>
                <div className="relative mb-4  w-[280px]  h-[238px]">
                  <Link
                    key={collection?._id}
                    to={`/video/${collection?.title.replace(/ /g, "_")}/${
                      collection?._id
                    }`}
                  >
                    <img
                      src={`http://localhost:8080/images/${collection.image}`}
                      className="w-full h-full rounded-xl"
                      alt=""
                    />
                    <div className="absolute w-full px-4 text-white  bg-[rgba(0,0,0,.4)] bottom-0 z-0 flex items-center justify-between">
                      <span>{collection.title}</span>
                      <span>Xem: 38</span>
                    </div>
                  </Link>
                </div>
              </>
            ))}
          </div>
          <div className="grid">
            <span className="pb-12 w-full text-center">Đang cập nhật thêm</span>
          </div>
        </TabsContent>
        <TabsContent value="vn">Change your password here.</TabsContent>
        <TabsContent value="jp">Change your password here.</TabsContent>
        <TabsContent value="hk">Change your password here.</TabsContent>
        <TabsContent value="gay">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default Cinema;
