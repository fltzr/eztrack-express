import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength, IsAlpha, IsPhoneNumber, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(9)
  @MaxLength(32)
  public username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(9)
  @MaxLength(32)
  public password: string;

  @IsString()
  @IsNotEmpty()
  @IsAlpha()
  public firstname: string;

  @IsString()
  @IsNotEmpty()
  @IsAlpha()
  public lastname: string;

  @IsString()
  @IsOptional()
  public gender: string;

  @IsString()
  @IsNotEmpty()
  public birthday: string;

  @IsPhoneNumber('US')
  public phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  public address: string;

  @IsString()
  @IsOptional()
  public address2: string;

  @IsString()
  @IsNotEmpty()
  public city: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(2)
  public state: string;
}

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(9)
  @MaxLength(32)
  public password: string;
}
