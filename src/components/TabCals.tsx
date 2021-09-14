import React, { useState } from 'react';
import styled from 'styled-components';

const content = [
	{
		id: 0,
		tab: '플리마켓',
		content: (
			<>
				<dl>
					<dt>
						<strong>민들레</strong>
						<span>9/8~9</span>
					</dt>
					<dd>
						<strong>영토는 어떻게 되찾는가</strong>
						<span>- 뭐하니 -</span>
					</dd>
				</dl>
				<dl>
					<dt>
						<strong>민들레</strong>
						<span>9/8~9</span>
					</dt>
					<dd>
						<strong>영토는 어떻게 되찾는가</strong>
						<span>- 뭐하니 -</span>
					</dd>
				</dl>
			</>
		),
	},
	{
		id: 1,
		tab: '원데이클래스',
		content: (
			<>
				<dl>
					<dt>
						<strong>모던</strong>
						<span>9/8~9</span>
					</dt>
					<dd>
						<strong>영토는 어떻게 되찾는가</strong>
						<span>- 뭐하니 -</span>
					</dd>
				</dl>
				<dl>
					<dt>
						<strong>아미파</strong>
						<span>9/8~9</span>
					</dt>
					<dd>
						<strong>영토는 어떻게 되찾는가</strong>
						<span>- 뭐하니 -</span>
					</dd>
				</dl>
			</>
		),
	},
];

const useTabs = (
	initialTab: number,
	allTabs: Array<{
		id: number;
		tab: string;
		content: React.ReactNode;
	}>
) => {
	const [currentIndex, setCurrentIndex] = useState(initialTab);
	// console.log(currentIndex);
	// 전체탭의 [0]번째로 노출해야함
	return {
		currentItem: allTabs[currentIndex],
		changeItem: setCurrentIndex,
		// changeItem은 함수 = setCurrentIndex
	};
};

const Section = styled.section`
	ul {
		display: flex;
		flex-flow: row wrap;
		li {
			flex: 1;
			button {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 100%;
				padding: 1rem;
				background-color: #383b3f;
				border: none;
				color: #fff;
				font-size: 1.8rem;
			}
			&.is-active {
				button {
					background-color: #2699fb;
					color: #fff;
				}
			}
		}
	}
`;
const TableDiv = styled.div`
	padding: 2rem;
	table {
		width: 100%;
		tr {
			display: flex;
			width: inherit;
			th {
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				height: 5rem;
			}
			td {
				position: relative;
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				height: 5rem;
				font-size: #777;
				span {
					position: absolute;
					bottom: -0.5rem;
					display: block;
					width: 90%;
					font-size: 1.2rem;
					background-color: #2699fb;
					color: #fff;
					border-radius: 2rem;
					text-align: center;
				}
				strong {
					position: absolute;
					bottom: -0.5rem;
					display: block;
					width: 90%;
					font-size: 1.2rem;
					background-color: #ea335d;
					color: #fff;
					border-radius: 2rem;
					text-align: center;
				}
			}
		}
	}
`;
const TabContDiv = styled.div`
	padding: 2rem;
	dl {
		display: flex;
		flex-flow: row wrap;
		padding: 1rem 2rem;
		border: 1px solid #ccc;
		border-radius: 1rem;
		& + dl {
			margin: 2rem 0;
		}
		dt {
			flex: 0 0 6rem;
			text-align: center;
			strong {
				font-weight: 600;
			}
			span {
				color: #999;
				font-size: 1.4rem;
			}
		}
		dd {
			flex: 1;
			padding: 0 1rem;
			span {
				display: block;
				font-size: 1.6rem;
				color: #666;
			}
		}
	}
`;

interface ItabcalsProps {
	// dark?: boolean;
}

const TabCals: React.FunctionComponent<ItabcalsProps> = () => {
	const { currentItem, changeItem } = useTabs(0, content);
	return (
		<Section>
			<ul>
				{content.map((item, index) => (
					<li
						key={item.id}
						className={currentItem.id === index ? 'is-active' : ''}
					>
						<button
							type="button"
							key={item.id}
							onClick={() => changeItem(index)}
						>
							{item.tab}
						</button>
					</li>
				))}
			</ul>
			<TableDiv>
				<table>
					<thead>
						<tr>
							<th>월</th>
							<th>화</th>
							<th>수</th>
							<th>목</th>
							<th>금</th>
							<th>토</th>
							<th>일</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td>1</td>
							<td>2</td>
							<td>
								3<strong>모던</strong>
							</td>
							<td>
								4<strong>모던</strong>
							</td>
						</tr>
						<tr>
							<td>5</td>
							<td>6</td>
							<td>7</td>
							<td>
								8<span>민들레</span>
							</td>
							<td>
								9<span>민들레</span>
							</td>
							<td>10</td>
							<td>
								11<strong>아미파</strong>
							</td>
						</tr>
						<tr>
							<td>12</td>
							<td>13</td>
							<td>14</td>
							<td>15</td>
							<td>16</td>
							<td>17</td>
							<td>18</td>
						</tr>
						<tr>
							<td>19</td>
							<td>20</td>
							<td>
								21<span>머니투</span>
							</td>
							<td>
								22<span>머니투</span>
							</td>
							<td>23</td>
							<td>24</td>
							<td>25</td>
						</tr>
						<tr>
							<td>26</td>
							<td>27</td>
							<td>28</td>
							<td>29</td>
							<td>30</td>
							<td>
								31<strong>온리원</strong>
							</td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</TableDiv>
			<TabContDiv>{currentItem.content}</TabContDiv>
		</Section>
	);
};

export default TabCals;
