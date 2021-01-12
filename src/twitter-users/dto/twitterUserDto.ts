import { IsNotEmpty } from "class-validator";

export class AddTwitterUserDto {
	@IsNotEmpty()
	screenName: string;
}
