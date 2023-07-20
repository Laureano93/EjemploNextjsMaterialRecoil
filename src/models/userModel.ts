import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('UserModel')
export class UserModel {
  @JsonProperty('id', Number)
  id: number = 0;
  @JsonProperty('email', String)
  email: string = '';
  @JsonProperty('first_name', String)
  first_name: string = '';
  @JsonProperty('last_name', String)
  last_name: string = '';
  @JsonProperty('avatar', String)
  avatar: string = '';
}
