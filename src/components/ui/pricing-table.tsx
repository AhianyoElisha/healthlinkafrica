import React from 'react';
import { cn } from '@/lib/utils';

function ImpactTable({ className, ...props }: React.ComponentProps<'table'>) {
	return (
		<div
			data-slot="table-container"
			className="relative w-full overflow-x-auto rounded-lg border"
		>
			<table className={cn('w-full text-sm', className)} {...props} />
		</div>
	);
}

function ImpactTableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
	return (
		<thead
			data-slot="table-header"
			className={cn('bg-foreground text-background', className)}
			{...props}
		/>
	);
}

function ImpactTableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
	return (
		<tbody
			data-slot="table-body"
			className={cn('[&_tr:nth-child(odd)]:bg-primary/5 [&_tr]:border-b [&_tr]:divide-x', className)}
			{...props}
		/>
	);
}

function ImpactTableRow({ className, ...props }: React.ComponentProps<'tr'>) {
	return (
		<tr
			data-slot="table-row"
			className={cn('transition-colors', className)}
			{...props}
		/>
	);
}

function ImpactTableHead({ className, ...props }: React.ComponentProps<'th'>) {
	return (
		<th
			data-slot="table-head"
			className={cn(
				'p-4 text-left align-middle font-semibold whitespace-nowrap',
				className,
			)}
			{...props}
		/>
	);
}

function ImpactTableCell({
	className,
	highlight,
	children,
	...props
}: React.ComponentProps<'td'> & { highlight?: boolean }) {
	return (
		<td
			data-slot="table-cell"
			className={cn(
				'p-4 align-middle whitespace-nowrap',
				highlight && 'font-bold',
				className,
			)}
			{...props}
		>
			{children === '—' ? (
				<span className="text-muted-foreground">—</span>
			) : (
				children
			)}
		</td>
	);
}

type ImpactMetric = {
	label: string;
	values: string[];
};

export {
	type ImpactMetric,
	ImpactTable,
	ImpactTableHeader,
	ImpactTableBody,
	ImpactTableRow,
	ImpactTableHead,
	ImpactTableCell,
};
