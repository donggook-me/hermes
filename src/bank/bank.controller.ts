import { Controller } from "@nestjs/common";
import { BankService } from "./bank.service";

@Controller()
export class BankController {
  constructor(private readonly bankService: BankService) {}
}
