import { Posts } from "../model/posts";
import { PostsDto } from "../dto/posts.dto";

export class PostsConverter {
    
    convertToModel(dto: PostsDto): Posts {
		return new Posts(
			dto.userId,
			dto.id,
			dto.title,
			dto.body
		);
	}
    convertToDto(model: Posts): PostsDto {
		return new PostsDto(
			model.userId,
			model.id,
			model.title,
			model.body
		);
	}
}