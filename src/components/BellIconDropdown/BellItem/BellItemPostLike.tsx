import { Avatar } from "../../Avatar";

export const BellItemPostLike = () => {
  return (
    <li>
      <div className="flex flex-col">
        <div className="flex items-start gap-2">
          <Avatar height="h-12" />
          <p className="text-pretty text-base line-clamp-2">
            <span className="font-bold hover:underline">Lê Thị Xuân Rin</span>{" "}
            đã thích bài viết của bạn
          </p>
        </div>
      </div>
    </li>
  );
};
