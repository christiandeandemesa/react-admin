import {useTheme, Box, Button, Typography, Avatar} from '@mui/material';
import {Pageview} from '@mui/icons-material';

import MyAreaChart from '../components/MyAreaChart';

import {tokens} from '../theme';
import Product from '../assets/product.png';

const sizes = ['XS', 'S', 'M', 'L', 'XL'];
const productColors = ['Red', 'Green', 'Blue', 'Black', 'Grey', 'White'];

function SingleProduct() {
	const theme = useTheme();
	const {mode} = theme.palette;
	const colors = tokens(mode);

	const colorsObject = {
		Red: colors.redAccent[500],
		Green: colors.greenAccent[500],
		Blue: colors.blueAccent[500],
		Black: colors.primary[500],
		Grey: colors.greyAccent[500],
		White: colors.secondary[500]
	};

	return (
		<Box sx={{m: '20px', pb: '20px'}}>
			<Box sx={{p: '20px', display: 'flex'}}>
				{/* Product Image */}
				<Box
					sx={{
						p: '20px',
						flex: 1
					}}
				>
					<Avatar
						alt='Product'
						src={Product}
						sx={{
							p: '20px',
							width: '250px',
							height: '250px',
							backgroundColor:
								mode === 'dark' ? colors.primary[600] : colors.secondary[300],
							border: `3px solid ${colors.purpleAccent[600]}`
						}}
					/>
				</Box>

				{/* Product Information */}
				<Box
					sx={{
						p: '20px',
						flex: 3,
						position: 'relative',
						backgroundColor:
							mode === 'dark' ? colors.primary[600] : colors.secondary[500],
						boxShadow: `2px 4px 10px 1px ${colors.greyAccent[400]}`,
						borderRadius: '5px'
					}}
				>
					<Button
						color='info'
						sx={{
							p: '5px',
							position: 'absolute',
							top: 0,
							right: 0,
							color: colors.blueAccent[400],
							borderRadius: '0px 0px 0px 5px'
						}}
					>
						Edit
					</Button>
					<Box
						sx={{
							width: '100%',
							height: '100%',
							display: 'grid',
							gridTemplateColumns: 'repeat(12, 1fr)',
							gridAutoRows: '140px',
							gap: '20px'
						}}
					>
						<Box
							sx={{
								gridColumn: 'span 4',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
							<Typography variant='h2'>
								<Typography
									component='span'
									variant='h2'
									sx={{borderBottom: `2px dotted ${colors.orangeAccent[400]}`}}
								>
									Name:
								</Typography>{' '}
								T-Shirt
							</Typography>
						</Box>
						<Box
							sx={{
								gridColumn: 'span 4',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
							<Typography variant='h2'>
								<Typography
									component='span'
									variant='h2'
									sx={{borderBottom: `2px dotted ${colors.orangeAccent[400]}`}}
								>
									Price:
								</Typography>{' '}
								$12.99
							</Typography>
						</Box>
						<Box
							sx={{
								gridColumn: 'span 4',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
							<Typography variant='h2'>
								<Typography
									component='span'
									variant='h2'
									sx={{borderBottom: `2px dotted ${colors.orangeAccent[400]}`}}
								>
									Stock:
								</Typography>{' '}
								500 available
							</Typography>
						</Box>
						<Box
							sx={{
								gridColumn: 'span 6',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								gap: '20px'
							}}
						>
							<Typography variant='h3'>Sizes:</Typography>
							<Box sx={{display: 'flex', gap: '5px'}}>
								{sizes.map(size => (
									<Avatar
										key={size}
										variant='square'
										sx={{
											color: colors.greyAccent[900],
											backgroundColor:
												mode === 'dark'
													? colors.secondary[400]
													: colors.primary[600],
											borderRadius: '5px'
										}}
									>
										{size}
									</Avatar>
								))}
							</Box>
						</Box>
						<Box
							sx={{
								gridColumn: 'span 6',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								gap: '20px'
							}}
						>
							<Typography variant='h3'>Colors:</Typography>
							<Box sx={{display: 'flex', gap: '5px'}}>
								{productColors.map(color => (
									<Avatar
										key={color}
										sx={{
											backgroundColor: colorsObject[color],
											border:
												mode === 'dark'
													? `1px solid ${colors.secondary[100]}`
													: `1px solid ${colors.primary[500]}`
										}}
									>
										<Pageview sx={{color: colorsObject[color]}} />
									</Avatar>
								))}
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>

			{/* Area Chart */}
			<Box
				sx={{
					m: '10px 20px',
					p: '20px',
					backgroundColor: mode === 'dark' ? colors.primary[600] : colors.secondary[500],
					boxShadow: `2px 4px 10px 1px ${colors.greyAccent[400]}`,
					borderRadius: '5px'
				}}
			>
				<Box sx={{color: mode === 'dark' ? colors.primary[900] : colors.primary[100]}}>
					<MyAreaChart title='Sales' chartColor='purple' />
				</Box>
			</Box>
		</Box>
	);
}

export default SingleProduct;
