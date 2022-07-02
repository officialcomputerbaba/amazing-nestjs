import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
  Optional,
} from "@nestjs/common";

export class ParseDateOptions {
  fromTimestamp: boolean;
  errorMsg?: string;
  dataKey?: string;
}

@Injectable()
export class ParseDatePipe implements PipeTransform {
  private fromTimestamp: boolean;
  private errorMsg: string;
  private dataKey: string;

  constructor(@Optional() options: ParseDateOptions) {
    this.fromTimestamp =
      options?.fromTimestamp !== undefined ? options.fromTimestamp : true;
    this.errorMsg = options?.errorMsg || "Invalid date";
    this.dataKey = options?.dataKey || "timestamp";
  }

  transform(value: string | number, metadata: ArgumentMetadata) {
    // extract data (key) 
    const { data: isKeyGiven } = metadata;

    if (!isKeyGiven) {
        value = value[this.dataKey];
    }

    const date = this.fromTimestamp
      ? this.convertTimestamp(value)
      : new Date(value);

    if (!date || isNaN(+date)) {
      const errorMsg = isKeyGiven ? `${isKeyGiven} is invalid` : this.errorMsg;

      throw new BadRequestException(errorMsg);
    }

    // extract metatype (given data type)
    const { metatype } = metadata;

    switch (metatype) {
      case String:
        return date.toUTCString();

      case Date:
        return date;

      case Number:
        return date.getTime();

      default:
        return date.toISOString();
    }
  }

  convertTimestamp(timestamp: string | number) {
    timestamp = +timestamp;

    const isSecond = !(timestamp > (Date.now() + 24 * 60 * 60 * 1000) / 1000);

    return isSecond ? new Date(timestamp * 1000) : new Date(timestamp);
  }
}
