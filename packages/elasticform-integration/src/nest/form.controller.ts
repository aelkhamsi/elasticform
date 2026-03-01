import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { IFormService, Form, FormField, FormSubmission, FormSubmissionValue } from '@elasticform/core';

@Controller('forms')
export class FormController {
  constructor(
    private readonly formService: IFormService,
  ) {}

  // Forms
  @Get()
  getForms(): Promise<Form[]> {
    return this.formService.getForms();
  }

  @Get(':id')
  async getFormById(@Param('id', ParseIntPipe) id: number): Promise<Form> {
    const form = await this.formService.getFormById(id);
    if (!form) throw new NotFoundException(`Form ${id} not found`);
    return form;
  }

  @Post()
  createForm(@Body() data: Partial<Form>): Promise<Form> {
    return this.formService.createForm(data);
  }

  @Put(':id')
  async updateForm(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<Form>): Promise<Form> {
    const form = await this.formService.updateForm(id, data);
    if (!form) throw new NotFoundException(`Form ${id} not found`);
    return form;
  }

  @Delete(':id')
  deleteForm(@Param('id', ParseIntPipe) id: number): Promise<boolean> {
    return this.formService.deleteForm(id);
  }

  // Fields
  @Post('fields')
  async addField(
    @Body() data: Partial<FormField>,
  ): Promise<FormField> {
    const field = await this.formService.createField(data);
    if (!field) throw new NotFoundException(`Form was not found`);
    return field;
  }

  @Put('fields/:fieldId')
  async updateField(
    @Param('fieldId', ParseIntPipe) fieldId: number,
    @Body() data: Partial<FormField>,
  ): Promise<FormField | null> {
    const field = await this.formService.updateField(fieldId, data);
    if (!field) throw new NotFoundException(`Field was not found`);
    return field
  }

  @Delete('fields/:fieldId')
  async removeField(@Param('fieldId', ParseIntPipe) fieldId: number): Promise<boolean> {
    const deleted = await this.formService.deleteField(fieldId);
    if (!deleted) throw new NotFoundException(`Field was not found`);
    return deleted;
  }

  // Submissions
  @Post('submissions')
  createSubmission(@Body() data: Partial<FormSubmission>): Promise<FormSubmission> {
    return this.formService.createSubmission(data);
  }

  @Delete('submissions/:submissionId')
  deleteSubmission(@Param('submissionId', ParseIntPipe) submissionId: number): Promise<boolean> {
    return this.formService.deleteSubmission(submissionId);
  }

  // Submission Values
  @Post('submissions/values')
  async addSubmissionValue(
    @Body() data: Partial<FormSubmissionValue>,
  ): Promise<FormSubmissionValue> {
    const submission = await this.formService.createSubmissionValue(data);
    if (!submission) throw new NotFoundException(`Submission was not found`);
    return submission;
  }

  @Put('submissions/values/:valueId')
  async updateSubmissionValue(
    @Param('valueId', ParseIntPipe) valueId: number,
    @Body() data: Partial<FormSubmissionValue>,
  ):  Promise<FormSubmissionValue | null> {
    const submissionValue = await this.formService.updateSubmissionValue(valueId, data);
    if (!submissionValue) throw new NotFoundException(`Submission was not found`);
    return submissionValue;
  }

  @Delete('submissions/values/:valueId')
  deleteSubmissionValue(
    @Param('valueId', ParseIntPipe) valueId: number,
  ): Promise<boolean> {
    return this.formService.deleteSubmissionValue(valueId);
  }
}