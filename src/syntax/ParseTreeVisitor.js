// Copyright 2013 Traceur Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// This file was auto generated by build-parse-tree-visitor.js
// from trees.json
// Do not edit!


export class ParseTreeVisitor {
  visitAny(tree) {
    tree && tree.visit(this);
  }
  visit(tree) {
    this.visitAny(tree);
  }
  visitList(list) {
    if (list) {
      for (var i = 0; i < list.length; i++) {
        this.visitAny(list[i]);
      }
    }
  }
  visitStateMachine(tree) {
    throw Error('State machines should not live outside of the GeneratorTransformer.');
  }
  visitAnnotation(tree) {
    this.visitAny(tree.name);
    this.visitAny(tree.args);
  }
  visitAnonBlock(tree) {
    this.visitList(tree.statements);
  }
  visitArgumentList(tree) {
    this.visitList(tree.args);
  }
  visitArrayComprehension(tree) {
    this.visitList(tree.comprehensionList);
    this.visitAny(tree.expression);
  }
  visitArrayLiteralExpression(tree) {
    this.visitList(tree.elements);
  }
  visitArrayPattern(tree) {
    this.visitList(tree.elements);
  }
  visitArrowFunctionExpression(tree) {
    this.visitAny(tree.parameterList);
    this.visitAny(tree.functionBody);
  }
  visitAwaitExpression(tree) {
    this.visitAny(tree.expression);
  }
  visitBinaryOperator(tree) {
    this.visitAny(tree.left);
    this.visitAny(tree.right);
  }
  visitBindingElement(tree) {
    this.visitAny(tree.binding);
    this.visitAny(tree.initialiser);
  }
  visitBindingIdentifier(tree) {
  }
  visitBlock(tree) {
    this.visitList(tree.statements);
  }
  visitBreakStatement(tree) {
  }
  visitCallExpression(tree) {
    this.visitAny(tree.operand);
    this.visitAny(tree.args);
  }
  visitCaseClause(tree) {
    this.visitAny(tree.expression);
    this.visitList(tree.statements);
  }
  visitCatch(tree) {
    this.visitAny(tree.binding);
    this.visitAny(tree.catchBody);
  }
  visitClassDeclaration(tree) {
    this.visitAny(tree.name);
    this.visitAny(tree.superClass);
    this.visitList(tree.elements);
    this.visitList(tree.annotations);
  }
  visitClassExpression(tree) {
    this.visitAny(tree.name);
    this.visitAny(tree.superClass);
    this.visitList(tree.elements);
    this.visitList(tree.annotations);
  }
  visitCommaExpression(tree) {
    this.visitList(tree.expressions);
  }
  visitComprehensionFor(tree) {
    this.visitAny(tree.left);
    this.visitAny(tree.iterator);
  }
  visitComprehensionIf(tree) {
    this.visitAny(tree.expression);
  }
  visitComputedPropertyName(tree) {
    this.visitAny(tree.expression);
  }
  visitConditionalExpression(tree) {
    this.visitAny(tree.condition);
    this.visitAny(tree.left);
    this.visitAny(tree.right);
  }
  visitContinueStatement(tree) {
  }
  visitCoverFormals(tree) {
    this.visitList(tree.expressions);
  }
  visitCoverInitialisedName(tree) {
    this.visitAny(tree.initialiser);
  }
  visitDebuggerStatement(tree) {
  }
  visitDefaultClause(tree) {
    this.visitList(tree.statements);
  }
  visitDoWhileStatement(tree) {
    this.visitAny(tree.body);
    this.visitAny(tree.condition);
  }
  visitEmptyStatement(tree) {
  }
  visitExportDeclaration(tree) {
    this.visitAny(tree.declaration);
    this.visitList(tree.annotations);
  }
  visitExportDefault(tree) {
    this.visitAny(tree.expression);
  }
  visitExportSpecifier(tree) {
  }
  visitExportSpecifierSet(tree) {
    this.visitList(tree.specifiers);
  }
  visitExportStar(tree) {
  }
  visitExpressionStatement(tree) {
    this.visitAny(tree.expression);
  }
  visitFinally(tree) {
    this.visitAny(tree.block);
  }
  visitForInStatement(tree) {
    this.visitAny(tree.initialiser);
    this.visitAny(tree.collection);
    this.visitAny(tree.body);
  }
  visitForOfStatement(tree) {
    this.visitAny(tree.initialiser);
    this.visitAny(tree.collection);
    this.visitAny(tree.body);
  }
  visitForStatement(tree) {
    this.visitAny(tree.initialiser);
    this.visitAny(tree.condition);
    this.visitAny(tree.increment);
    this.visitAny(tree.body);
  }
  visitFormalParameter(tree) {
    this.visitAny(tree.parameter);
    this.visitAny(tree.typeAnnotation);
    this.visitList(tree.annotations);
  }
  visitFormalParameterList(tree) {
    this.visitList(tree.parameters);
  }
  visitFunctionBody(tree) {
    this.visitList(tree.statements);
  }
  visitFunctionDeclaration(tree) {
    this.visitAny(tree.name);
    this.visitAny(tree.parameterList);
    this.visitAny(tree.typeAnnotation);
    this.visitList(tree.annotations);
    this.visitAny(tree.functionBody);
  }
  visitFunctionExpression(tree) {
    this.visitAny(tree.name);
    this.visitAny(tree.parameterList);
    this.visitAny(tree.typeAnnotation);
    this.visitList(tree.annotations);
    this.visitAny(tree.functionBody);
  }
  visitGeneratorComprehension(tree) {
    this.visitList(tree.comprehensionList);
    this.visitAny(tree.expression);
  }
  visitGetAccessor(tree) {
    this.visitAny(tree.name);
    this.visitAny(tree.typeAnnotation);
    this.visitList(tree.annotations);
    this.visitAny(tree.body);
  }
  visitIdentifierExpression(tree) {
  }
  visitIfStatement(tree) {
    this.visitAny(tree.condition);
    this.visitAny(tree.ifClause);
    this.visitAny(tree.elseClause);
  }
  visitImportedBinding(tree) {
    this.visitAny(tree.binding);
  }
  visitImportDeclaration(tree) {
    this.visitAny(tree.importClause);
    this.visitAny(tree.moduleSpecifier);
  }
  visitImportSpecifier(tree) {
  }
  visitImportSpecifierSet(tree) {
    this.visitList(tree.specifiers);
  }
  visitLabelledStatement(tree) {
    this.visitAny(tree.statement);
  }
  visitLiteralExpression(tree) {
  }
  visitLiteralPropertyName(tree) {
  }
  visitMemberExpression(tree) {
    this.visitAny(tree.operand);
  }
  visitMemberLookupExpression(tree) {
    this.visitAny(tree.operand);
    this.visitAny(tree.memberExpression);
  }
  visitModule(tree) {
    this.visitList(tree.scriptItemList);
  }
  visitModuleDeclaration(tree) {
    this.visitAny(tree.expression);
  }
  visitModuleSpecifier(tree) {
  }
  visitNamedExport(tree) {
    this.visitAny(tree.moduleSpecifier);
    this.visitAny(tree.specifierSet);
  }
  visitNewExpression(tree) {
    this.visitAny(tree.operand);
    this.visitAny(tree.args);
  }
  visitObjectLiteralExpression(tree) {
    this.visitList(tree.propertyNameAndValues);
  }
  visitObjectPattern(tree) {
    this.visitList(tree.fields);
  }
  visitObjectPatternField(tree) {
    this.visitAny(tree.name);
    this.visitAny(tree.element);
  }
  visitParenExpression(tree) {
    this.visitAny(tree.expression);
  }
  visitPostfixExpression(tree) {
    this.visitAny(tree.operand);
  }
  visitPredefinedType(tree) {
  }
  visitScript(tree) {
    this.visitList(tree.scriptItemList);
  }
  visitPropertyMethodAssignment(tree) {
    this.visitAny(tree.name);
    this.visitAny(tree.parameterList);
    this.visitAny(tree.typeAnnotation);
    this.visitList(tree.annotations);
    this.visitAny(tree.functionBody);
  }
  visitPropertyNameAssignment(tree) {
    this.visitAny(tree.name);
    this.visitAny(tree.value);
  }
  visitPropertyNameShorthand(tree) {
  }
  visitRestParameter(tree) {
    this.visitAny(tree.identifier);
  }
  visitReturnStatement(tree) {
    this.visitAny(tree.expression);
  }
  visitSetAccessor(tree) {
    this.visitAny(tree.name);
    this.visitAny(tree.parameterList);
    this.visitList(tree.annotations);
    this.visitAny(tree.body);
  }
  visitSpreadExpression(tree) {
    this.visitAny(tree.expression);
  }
  visitSpreadPatternElement(tree) {
    this.visitAny(tree.lvalue);
  }
  visitSuperExpression(tree) {
  }
  visitSwitchStatement(tree) {
    this.visitAny(tree.expression);
    this.visitList(tree.caseClauses);
  }
  visitSyntaxErrorTree(tree) {
  }
  visitTemplateLiteralExpression(tree) {
    this.visitAny(tree.operand);
    this.visitList(tree.elements);
  }
  visitTemplateLiteralPortion(tree) {
  }
  visitTemplateSubstitution(tree) {
    this.visitAny(tree.expression);
  }
  visitThisExpression(tree) {
  }
  visitThrowStatement(tree) {
    this.visitAny(tree.value);
  }
  visitTryStatement(tree) {
    this.visitAny(tree.body);
    this.visitAny(tree.catchBlock);
    this.visitAny(tree.finallyBlock);
  }
  visitTypeName(tree) {
    this.visitAny(tree.moduleName);
  }
  visitUnaryExpression(tree) {
    this.visitAny(tree.operand);
  }
  visitVariableDeclaration(tree) {
    this.visitAny(tree.lvalue);
    this.visitAny(tree.typeAnnotation);
    this.visitAny(tree.initialiser);
  }
  visitVariableDeclarationList(tree) {
    this.visitList(tree.declarations);
  }
  visitVariableStatement(tree) {
    this.visitAny(tree.declarations);
  }
  visitWhileStatement(tree) {
    this.visitAny(tree.condition);
    this.visitAny(tree.body);
  }
  visitWithStatement(tree) {
    this.visitAny(tree.expression);
    this.visitAny(tree.body);
  }
  visitYieldExpression(tree) {
    this.visitAny(tree.expression);
  }
}
